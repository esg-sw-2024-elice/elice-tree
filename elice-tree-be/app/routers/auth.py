from datetime import timedelta
from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import APIKeyHeader
from app.schemas.auth import LoginRequest, LoginResponse, LogoutResponse
from app.utils.auth import create_access_token
from app.mock.data import mock_user
from app.configs.config import ACCESS_TOKEN_EXPIRE_MINUTES

router = APIRouter()


@router.post("/api/auth/login", response_model=LoginResponse)
async def login(request: LoginRequest):
    if request.id in mock_user and mock_user[request.id] == request.password:
        access_token = create_access_token(
            data={"sub": request.id},
            expires_delta=timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES),
        )
        return {"accessToken": access_token}
    raise HTTPException(status_code=401, detail="Invalid credentials")


@router.post("/api/auth/logout", response_model=LogoutResponse)
async def logout(token: str = Depends(APIKeyHeader(name="Authorization"))):
    return {"isLogoutSuccess": True}
