const WebSocket = require("ws");
const net = require("net");

const wss = new WebSocket.Server({
    port: 8081,
    host: "0.0.0.0"
});

wss.on("connection", (ws) => {
    const socket = new net.Socket();

    socket.connect(25565, "localhost");

    ws.on("message", (msg) => socket.write(msg));
    socket.on("data", (data) => ws.send(data));

    ws.on("close", () => socket.end());
});

console.log("Relay running on 0.0.0.0:8081");
