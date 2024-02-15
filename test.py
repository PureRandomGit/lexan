from starlette.testclient import TestClient
from starlette.websockets import WebSocket

async def app(scope, receive, send):
    assert scope['type'] == 'websocket'
    websocket = WebSocket(scope, receive=receive, send=send)
    await websocket.accept()


def test_app():
    client = TestClient(app, base_url="http://localhost:8081")
    with client.websocket_connect('/ws/1') as websocket:
        while true:
            print(websocket.receive_text())
