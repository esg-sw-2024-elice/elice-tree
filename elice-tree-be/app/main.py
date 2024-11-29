from fastapi import FastAPI
import uvicorn
from app.routers import auth, mission
from fastapi.middleware.cors import CORSMiddleware


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

origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8080)
# uvicorn app.main:app --reload --host 127.0.0.1 --port 8080
