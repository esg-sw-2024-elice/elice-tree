from datetime import timedelta
from fastapi import APIRouter, HTTPException
# from fastapi.security import APIKeyHeader
from app.configs.config import ACCESS_TOKEN_EXPIRE_MINUTES
from app.utils.function import make_base_response
from app.utils.auth import create_access_token
from app.mock.data import mock_user
from app.schemas.base import BaseResponse
from app.schemas.auth import AuthRequest, AuthResponse
from app.schemas.example import (
    example_regist,
    example_login,
    example_400,
    example_500
    # example_logout
)

router = APIRouter()


@router.post("/api/auth/regist", response_model=BaseResponse, responses={
    200: {"description": "User registered successfully", "content": {"application/json": {"example": example_regist}}},
    400: {"description": "User already exists", "content": {"application/json": {"example": example_400}}},
    500: {"description": "Internal Server Error", "content": {"application/json": {"example": example_500}}}
})
async def regist(request: AuthRequest):
    try:
        if request.id in mock_user:
            return make_base_response(400, "User already exists", {})
        mock_user[request.id] = request.password
        return make_base_response(200, "User registered successfully", {})
    except Exception as e:
        raise HTTPException(status_code=500, detail="Internal Server Error") from e


@router.post("/api/auth/login", response_model=BaseResponse, responses={
    200: {"description": "Login successful", "content": {"application/json": {"example": example_login}}},
    400: {"description": "Invalid credentials", "content": {"application/json": {"example": example_400}}},
    500: {"description": "Internal Server Error", "content": {"application/json": {"example": example_500}}}
})
async def login(request: AuthRequest):
    try:
        if request.id in mock_user and mock_user[request.id] == request.password:
            access_token = create_access_token(
                data={"sub": request.id},
                expires_delta=timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES),
            )
            return make_base_response(200, "Login successful", AuthResponse(accessToken=access_token))
        return make_base_response(400, "Invalid credentials", {})
    except Exception as e:
        raise HTTPException(status_code=500, detail="Internal Server Error") from e


# @router.post("/api/auth/logout", response_model=BaseResponse, responses={
#     200: {"description": "Internal Server Error", "content": {"application/json": {"example": example_logout}}},
#     500: {"description": "Internal Server Error", "content": {"application/json": {"example": example_500}}}
# })
# async def logout(token: str = Depends(APIKeyHeader(name="Authorization"))):
#     try:
#         return make_base_response(200, "User logout successfully", {})
#     except Exception as e:
#         raise HTTPException(status_code=500, detail="Internal Server Error") from e
