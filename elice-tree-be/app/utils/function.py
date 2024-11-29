from app.schemas.base import BaseResponse


def make_base_response(code: int, message: str, result: any = {}) -> BaseResponse:
    return BaseResponse(code=code, message=message, result=result)
