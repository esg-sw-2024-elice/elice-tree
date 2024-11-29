from pydantic import BaseModel


class MissionRequest(BaseModel):
    id: int
