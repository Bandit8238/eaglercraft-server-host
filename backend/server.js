const express = require("express");
const cors = require("cors");
const { startServer, stopServer, listServers } = require("./serverManager");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/servers", (req, res) => {
    res.json(listServers());
});

app.post("/start", (req, res) => {
    const { name } = req.body;
    startServer(name);
    res.send("Started " + name);
});

app.post("/stop", (req, res) => {
    const { name } = req.body;
    stopServer(name);
    res.send("Stopped " + name);
});

// IMPORTANT: Codespaces needs 0.0.0.0
const PORT = 3000;
app.listen(PORT, "0.0.0.0", () => {
    console.log("Backend running on port " + PORT);
});
