example_regist = {
    "code": 200,
    "message": "Successful user",
    "result": {}
}


example_login = {
    "code": 200,
    "message": "Successful user",
    "result": {"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJpZCIsImV4cCI6MTczMjE3MjM4NH0.nJR_j3_h43tSbXbfI2zjgO_KgNg2h2iASxcurafT9qs"}
}


example_mission_get = {
    "code": 200,
    "message": "Mission retrieved successfully",
    "result": {
        "id": 1,
        "content": "Mission 1",
        "isCompleted": False
    }
}


example_mission_list = {
    "code": 200,
    "message": "Mission list retrieved successfully",
    "result": [
        {"id": 1, "content": "Mission 1", "isCompleted": False},
        {"id": 2, "content": "Mission 2", "isCompleted": True}
    ]
}


example_mission_patch = {
    "code": 200,
    "message": "Mission status updated successfully",
    "result": {}
}


example_mission_delete = {
    "code": 200,
    "message": "Mission deleted successfully",
    "result": {}
}


example_404= {
    "code": 404,
    "message": "Not found",
    "result": {}
}


example_400 = {
    "code": 400,
    "message": "Invalid Error",
    "result": {}
}


example_500= {
    "code": 500,
    "message": "Server Error",
    "result": {}
}
