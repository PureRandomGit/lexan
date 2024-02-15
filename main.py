from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.responses import HTMLResponse

app = FastAPI()


class ConnectionManager:
    def __init__(self):
        self.active_connections: list[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)

    async def send_personal_message(self, message: str, websocket: WebSocket):
        await websocket.send_text(message)

    async def broadcast(self, message: str):
        for connection in self.active_connections:
            await connection.send_text(message)
    
manager = ConnectionManager()

occu_seats = [1, 2, 3]
mute_seats = []
target = 0

def set_mute_seats(target):
    #math
    true = true

@app.get("/occuseats/")
async def get_occu_seats():
    return occu_seats

@app.get("/targetseat/{target}")
async def get_occu_seats(target):
    set_mute_seats(target)
    target = target
    return


    
@app.websocket("/ws/{client_id}")
async def websocket_endpoint(websocket: WebSocket, client_id: int):
    await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_text()
    except WebSocketDisconnect:
        manager.disconnect(websocket)

@app.get("/playsound")
async def playsound():
    await manager.broadcast("test")