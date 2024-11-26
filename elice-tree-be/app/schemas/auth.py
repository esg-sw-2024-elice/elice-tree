from pydantic import BaseModel


class LoginRequest(BaseModel):
    id: str
    password: str


class LoginResponse(BaseModel):
    accessToken: str


class LogoutResponse(BaseModel):
    isLogoutSuccess: bool
