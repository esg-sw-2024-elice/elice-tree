from pydantic import BaseModel


class Mission(BaseModel):
    id: int
    content: str
    isCompleted: bool


class MissionCompleteRequest(BaseModel):
    id: int


class MissionCompleteResponse(BaseModel):
    isCompletedSuccess: bool
