from fastapi import FastAPI
import uvicorn
from app.routers import auth, mission


_openapi = FastAPI.openapi
def openapi(self: FastAPI):
    _openapi(self)

    for _, method_item in self.openapi_schema.get('paths').items():
        for _, param in method_item.items():
            responses = param.get('responses')
            # remove 422 response, also can remove other status code
            if '422' in responses:
                del responses['422']

    return self.openapi_schema

FastAPI.openapi = openapi

app = FastAPI()
app.include_router(auth.router, tags=["auth"])
app.include_router(mission.router, tags=["mission"])


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8080)
# uvicorn app.main:app --reload --host 127.0.0.1 --port 8080
