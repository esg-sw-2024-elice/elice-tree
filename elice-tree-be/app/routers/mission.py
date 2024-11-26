from typing import List
from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import APIKeyHeader
from app.schemas.mission import Mission, MissionCompleteRequest, MissionCompleteResponse
from app.utils.auth import decode_access_token
from app.mock.data import mock_missions

router = APIRouter()


@router.get("/api/list/{id}", response_model=Mission)
async def get_mission(
    id: int, token: str = Depends(APIKeyHeader(name="Authorization"))
):
    payload = decode_access_token(token)
    user_id = payload.get("sub")
    if not user_id:
        raise HTTPException(status_code=403, detail="Invalid token payload")
    mission = next((m for m in mock_missions if m["id"] == id), None)
    if not mission:
        raise HTTPException(status_code=404, detail="Mission not found")
    return mission


@router.get("/api/list", response_model=List[Mission])
async def get_mission_list(token: str = Depends(APIKeyHeader(name="Authorization"))):
    payload = decode_access_token(token)
    user_id = payload.get("sub")
    if not user_id:
        raise HTTPException(status_code=403, detail="Invalid token payload")
    return mock_missions


@router.post("/complete", response_model=MissionCompleteResponse)
async def complete_mission(
    request: MissionCompleteRequest,
    token: str = Depends(APIKeyHeader(name="Authorization")),
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
