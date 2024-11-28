from pydantic import BaseModel


class AuthRequest(BaseModel):
    id: str
    password: str


class AuthResponse(BaseModel):
    accessToken: str
