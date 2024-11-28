from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import APIKeyHeader
from app.utils.auth import decode_access_token
from app.utils.function import make_base_response
from app.mock.data import mock_missions
from app.schemas.mission import MissionRequest
from app.schemas.base import BaseResponse
from app.schemas.example import (
    example_mission_get,
    example_mission_list,
    example_mission_patch,
    example_mission_delete,
    example_400,
    example_404,
)

router = APIRouter()


@router.get("/api/mission/get", response_model=BaseResponse, responses={
    200: {"description": "Mission retrieved successfully", "content": {"application/json": {"example": example_mission_get}}},
    400: {"description": "Invalid Authorization", "content": {"application/json": {"example": example_400}}},
    404: {"description": "Mission not found", "content": {"application/json": {"example": example_404}}},
    500: {"description": "Internal Server Error", "content": {"application/json": {"example": {"code": 500, "message": "Internal Server Error"}}}}
})
async def get_mission(
    id: int,
    token: str = Depends(APIKeyHeader(name="Authorization"))
):
    try:
        payload = decode_access_token(token)
        user_id = payload.get("sub")
        if not user_id:
            return make_base_response(400, "Invalid Authorization")
        mission = next((m for m in mock_missions if m["id"] == id), None)
        if not mission:
            return make_base_response(404, "Mission not found")
        return make_base_response(200, "Mission retrieved successfully", mission)
    except Exception:
        raise HTTPException(status_code=500, detail="Internal Server Error")


@router.get("/api/mission/list", response_model=BaseResponse, responses={
    200: {"description": "Mission list retrieved successfully", "content": {"application/json": {"example": example_mission_list}}},
    400: {"description": "Invalid Authorization", "content": {"application/json": {"example": example_400}}},
    500: {"description": "Internal Server Error", "content": {"application/json": {"example": {"code": 500, "message": "Internal Server Error"}}}}
})
async def get_mission_list(token: str = Depends(APIKeyHeader(name="Authorization"))):
    try:
        payload = decode_access_token(token)
        user_id = payload.get("sub")
        if not user_id:
            return make_base_response(400, "Invalid token payload")
        return make_base_response(200, "Mission list retrieved successfully", mock_missions)
    except Exception:
        raise HTTPException(status_code=500, detail="Internal Server Error")


@router.patch("/api/mission/complete", response_model=BaseResponse, responses={
    200: {"description": "Mission status updated successfully", "content": {"application/json": {"example": example_mission_patch}}},
    400: {"description": "Invalid Authorization", "content": {"application/json": {"example": example_400}}},
    404: {"description": "Mission not found", "content": {"application/json": {"example": example_404}}},
    500: {"description": "Internal Server Error", "content": {"application/json": {"example": {"code": 500, "message": "Internal Server Error"}}}}
})
async def complete_mission(
    request: MissionRequest,
    token: str = Depends(APIKeyHeader(name="Authorization"))
):
    try:
        payload = decode_access_token(token)
        user_id = payload.get("sub")
        if not user_id:
            return make_base_response(400, "Invalid token payload")
        mission = next((m for m in mock_missions if m["id"] == request.id), None)
        if not mission:
            return make_base_response(404, "Mission not found")
        mission["isCompleted"] = not mission["isCompleted"]
        return make_base_response(200, "Mission status updated successfully")
    except Exception:
        raise HTTPException(status_code=500, detail="Internal Server Error")


@router.delete("/api/mission/delete", response_model=BaseResponse, responses={
    200: {"description": "Mission deleted successfully", "content": {"application/json": {"example": example_mission_delete}}},
    400: {"description": "Invalid Authorization", "content": {"application/json": {"example": example_400}}},
    404: {"description": "Mission not found", "content": {"application/json": {"example": example_404}}},
    500: {"description": "Internal Server Error", "content": {"application/json": {"example": {"code": 500, "message": "Internal Server Error"}}}}
})
async def delete_mission(
    request: MissionRequest,
    token: str = Depends(APIKeyHeader(name="Authorization"))
):
    try:
        payload = decode_access_token(token)
        user_id = payload.get("sub")
        if not user_id:
            return make_base_response(400, "Invalid token payload")
        mission = next((m for m in mock_missions if m["id"] == request.id), None)
        if not mission:
            return make_base_response(404, "Mission not found")
        mock_missions.remove(mission)
        return make_base_response(200, "Mission deleted successfully")
    except Exception:
        raise HTTPException(status_code=500, detail="Internal Server Error")
