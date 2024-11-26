import os
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, Depends
from fastapi.security import APIKeyHeader
from pydantic import BaseModel
from typing import List
from datetime import datetime, timedelta
import jwt
import uvicorn

app = FastAPI()

api_key_header = APIKeyHeader(name="Authorization")


load_dotenv()
SECRET_KEY = os.getenv("SECRET_KEY", "test_secret_key")
ALGORITHM = os.getenv("ALGORITHM", "HS256")
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", 30))

mock_user = {"id": "password"}
mock_missions = [
    {"id": 1, "content": "탄소배출을 위해 우리가 할 수 있는 행동", "isCompleted": True},
    {
        "id": 2,
        "content": "탄소배출을 위해 우리가 할 수 있는 행동",
        "isCompleted": False,
    },
]
# mock_token = "jwt_token"


class LoginRequest(BaseModel):
    id: str
    password: str


class LoginResponse(BaseModel):
    accessToken: str


class LogoutResponse(BaseModel):
    isLogoutSuccess: bool


class Mission(BaseModel):
    id: int
    content: str
    isCompleted: bool


class MissionCompleteRequest(BaseModel):
    id: int


class MissionCompleteResponse(BaseModel):
    isCompletedSuccess: bool


def create_access_token(data: dict, expires_delta: timedelta = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=15))
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)


def decode_access_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token has expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")


@app.post("/api/auth/login", response_model=LoginResponse)
async def login(request: LoginRequest):
    if request.id in mock_user and mock_user[request.id] == request.password:
        access_token = create_access_token(
            data={"sub": request.id},
            expires_delta=timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES),
        )
        return {"accessToken": access_token}
    raise HTTPException(status_code=401, detail="Invalid credentials")


@app.post("/api/auth/logout", response_model=LogoutResponse)
async def logout(token: str = Depends(api_key_header)):
    return {"isLogoutSuccess": True}


@app.get("/api/list/{id}", response_model=Mission)
async def get_mission(id: int, token: str = Depends(api_key_header)):
    payload = decode_access_token(token)
    user_id = payload.get("sub")
    if not user_id:
        raise HTTPException(status_code=403, detail="Invalid token payload")
    mission = next((m for m in mock_missions if m["id"] == id), None)
    if not mission:
        raise HTTPException(status_code=404, detail="Mission not found")
    return mission


@app.get("/api/list", response_model=List[Mission])
async def get_mission_list(token: str = Depends(api_key_header)):
    payload = decode_access_token(token)
    user_id = payload.get("sub")
    if not user_id:
        raise HTTPException(status_code=403, detail="Invalid token payload")
    return mock_missions


@app.post("/complete", response_model=MissionCompleteResponse)
async def complete_mission(
    request: MissionCompleteRequest, token: str = Depends(api_key_header)
):
    payload = decode_access_token(token)
    user_id = payload.get("sub")
    if not user_id:
        raise HTTPException(status_code=403, detail="Invalid token payload")
    mission = next((m for m in mock_missions if m["id"] == request.id), None)
    if mission:
        mission["isCompleted"] = True
        return {"isCompletedSuccess": True}
    raise HTTPException(status_code=404, detail="Mission not found")


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8080)
# uvicorn main:app --reload --host 127.0.0.1 --port 8080
