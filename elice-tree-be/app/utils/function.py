import jwt
from fastapi import HTTPException
from app.configs.config import SECRET_KEY, ALGORITHM, ACCESS_TOKEN_EXPIRE_MINUTES
from app.mock.data import mock_user
from app.schemas.base import BaseResponse
from datetime import datetime, timedelta


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


def generate_access_token(data: dict):
    return create_access_token(
        data=data,
        expires_delta=timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES),
    )


def verify_user_from_token(token: str):
    try:
        payload = decode_access_token(token)
        user_id = payload.get("sub")
        if not user_id:
            return None
        return user_id
    except Exception:
        raise HTTPException(status_code=500, detail="Internal Server Error")


def make_base_response(code: int, message: str, result: any = {}) -> BaseResponse:
    return BaseResponse(code=code, message=message, result=result)
