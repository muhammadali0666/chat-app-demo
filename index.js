const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
require("dotenv").config()
const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket)=>{
  socket.on('chat message', (msg)=>{
    io.emit('chat message', msg);
  });
});

http.listen(PORT, ()=>{
  console.log('Server is running on the port ' + PORT);
});
