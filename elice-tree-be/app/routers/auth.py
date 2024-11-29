from fastapi import APIRouter, HTTPException
# from fastapi.security import APIKeyHeader
from app.mock.data import mock_user
from app.schemas.base import BaseResponse
from app.schemas.auth import (
    AuthRequest,
    AuthResponse
)
from app.utils.function import (
    generate_access_token,
    make_base_response
)
from app.mock.example import (
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
            return make_base_response(400, "User already exists")
        mock_user[request.id] = request.password
        return make_base_response(200, "User registered successfully")
    except Exception:
        return make_base_response(500, "Internal Server Error")


@router.post("/api/auth/login", response_model=BaseResponse, responses={
    200: {"description": "Login successful", "content": {"application/json": {"example": example_login}}},
    400: {"description": "Invalid credentials", "content": {"application/json": {"example": example_400}}},
    500: {"description": "Internal Server Error", "content": {"application/json": {"example": example_500}}}
})
async def login(request: AuthRequest):
    try:
        if request.id in mock_user and mock_user[request.id] == request.password:
            access_token = generate_access_token(data={"sub": request.id})
            return make_base_response(200, "Login successful", AuthResponse(accessToken=access_token))
        return make_base_response(400, "Invalid credentials")
    except Exception:
        return make_base_response(500, "Internal Server Error")


# TODO: /api/auth/logout
# @router.post("/api/auth/logout", response_model=BaseResponse, responses={
#     200: {"description": "User logged out successfully", "content": {"application/json": {"example": example_logout}}},
#     500: {"description": "Internal Server Error", "content": {"application/json": {"example": example_500}}}
# })
# async def logout(token: str = Depends(APIKeyHeader(name="Authorization"))):
#     try:
#         return make_base_response(200, "Logout successfully")
#     except Exception as e:
#         return make_base_response(500, "Internal Server Error")
