from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import APIKeyHeader
from app.mock.data import mock_missions
from app.schemas.mission import MissionRequest
from app.schemas.base import BaseResponse
from app.utils.function import (
    verify_user_from_token,
    make_base_response
)
from app.mock.example import (
    example_mission_get,
    example_mission_list,
    example_mission_patch,
    example_mission_delete,
    example_400,
    example_404,
    example_500
)

router = APIRouter()


# TODO: /api/mission/edit


@router.get("/api/mission/get", response_model=BaseResponse, responses={
    200: {"description": "Mission retrieved successfully", "content": {"application/json": {"example": example_mission_get}}},
    400: {"description": "Invalid Authorization", "content": {"application/json": {"example": example_400}}},
    404: {"description": "Mission not found", "content": {"application/json": {"example": example_404}}},
    500: {"description": "Internal Server Error", "content": {"application/json": {"example": example_500}}}
})
async def get_mission(
    id: int,
    token: str = Depends(APIKeyHeader(name="Authorization"))
):
    try:
        user_id = verify_user_from_token(token)
        if not user_id:
            return make_base_response(400, "Invalid Authorization")
        mission = next((m for m in mock_missions if m["id"] == id), None)
        if not mission:
            return make_base_response(404, "Mission not found")
        return make_base_response(200, "Mission retrieved successfully", mission)
    except Exception:
        return make_base_response(500, "Internal Server Error")


@router.get("/api/mission/list", response_model=BaseResponse, responses={
    200: {"description": "Mission list retrieved successfully", "content": {"application/json": {"example": example_mission_list}}},
    400: {"description": "Invalid Authorization", "content": {"application/json": {"example": example_400}}},
    500: {"description": "Internal Server Error", "content": {"application/json": {"example": example_500}}}
})
async def get_mission_list(token: str = Depends(APIKeyHeader(name="Authorization"))):
    try:
        user_id = verify_user_from_token(token)
        if not user_id:
            return make_base_response(400, "Invalid token")
        return make_base_response(200, "Mission list retrieved successfully", mock_missions)
    except Exception:
        return make_base_response(500, "Internal Server Error")


@router.patch("/api/mission/complete", response_model=BaseResponse, responses={
    200: {"description": "Mission status updated successfully", "content": {"application/json": {"example": example_mission_patch}}},
    400: {"description": "Invalid Authorization", "content": {"application/json": {"example": example_400}}},
    404: {"description": "Mission not found", "content": {"application/json": {"example": example_404}}},
    500: {"description": "Internal Server Error", "content": {"application/json": {"example": example_500}}}
})
async def complete_mission(
    request: MissionRequest,
    token: str = Depends(APIKeyHeader(name="Authorization"))
):
    try:
        user_id = verify_user_from_token(token)
        if not user_id:
            return make_base_response(400, "Invalid token")
        mission = next((m for m in mock_missions if m["id"] == request.id), None)
        if not mission:
            return make_base_response(404, "Mission not found")
        mission["isCompleted"] = not mission["isCompleted"]
        return make_base_response(200, "Mission status updated successfully")
    except Exception:
        return make_base_response(500, "Internal Server Error")


@router.delete("/api/mission/delete", response_model=BaseResponse, responses={
    200: {"description": "Mission deleted successfully", "content": {"application/json": {"example": example_mission_delete}}},
    400: {"description": "Invalid Authorization", "content": {"application/json": {"example": example_400}}},
    404: {"description": "Mission not found", "content": {"application/json": {"example": example_404}}},
    500: {"description": "Internal Server Error", "content": {"application/json": {"example": example_500}}}
})
async def delete_mission(
    request: MissionRequest,
    token: str = Depends(APIKeyHeader(name="Authorization"))
):
    try:
        user_id = verify_user_from_token(token)
        if not user_id:
            return make_base_response(400, "Invalid token")
        mission = next((m for m in mock_missions if m["id"] == request.id), None)
        if not mission:
            return make_base_response(404, "Mission not found")
        mock_missions.remove(mission)
        return make_base_response(200, "Mission deleted successfully")
    except Exception:
        return make_base_response(500, "Internal Server Error")
