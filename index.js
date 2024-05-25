const app = require("express")()
const http = require("http").createServer(app)
const path = require("path")
const io = require("socket.io")(http)
require("dotenv").config()

const port = process.env.port || 3001

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"))
})


io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg)
  })
})



http.listen(port, () => {
  console.log("server is running at the http://localhost:3000");
})