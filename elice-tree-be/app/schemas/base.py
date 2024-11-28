from pydantic import BaseModel
from typing import Any


class BaseResponse(BaseModel):
    code: int
    message: str
    result: Any = {}
