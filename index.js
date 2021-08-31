// sm. node_modules 에 있는 express 관련 파일을 가져온다.
var express = require('express')
var socket = require("socket.io");

// sm. express 는 함수이므로, 반환값을 변수에 저장한다.
var app = express()


// sm. 서버가동시에 우리의 기본 index를 설정해준다

let server = app.listen(process.env.PORT||4000, function () {
  console.log("Server is running");
});


// sm. views 폴더의 우리 프로젝트를 기본경로로 설정한다
app.use(express.static(__dirname+"/views"));




// 4000 포트로 서버 오픈(로컬일때), 헤로쿠에 올렸을때는 헤로쿠의 포트를 받아 적용시켜준다




  /////////////////////////sm. 여기서부터는 영상가동을 위한 코드들


  let io = socket(server);

  //Triggered when a client is connected.
  
  io.on("connection", function (socket) {
    console.log("User Connected :" + socket.id);
  
    //Triggered when a peer hits the join room button.
  
    socket.on("join", function (roomName) {
      let rooms = io.sockets.adapter.rooms;
      let room = rooms.get(roomName);
  
      //room == undefined when no such room exists.
      if (room == undefined) {
        socket.join(roomName);
        socket.emit("created");
      } else if (room.size <= 5) {
        //room.size == 1 when one person is inside the room.
        socket.join(roomName);
        socket.emit("joined");
      } else {
        //when there are already two people inside the room.
        socket.emit("full");
      }
      console.log(rooms);
    });
  
    //Triggered when the person who joined the room is ready to communicate.
    socket.on("ready", function (roomName) {
      socket.broadcast.to(roomName).emit("ready"); //Informs the other peer in the room.
    });
  
    //Triggered when server gets an icecandidate from a peer in the room.
  
    socket.on("candidate", function (candidate, roomName) {
      console.log(candidate);
      socket.broadcast.to(roomName).emit("candidate", candidate); //Sends Candidate to the other peer in the room.
    });
  
    //Triggered when server gets an offer from a peer in the room.
  
    socket.on("offer", function (offer, roomName) {
      socket.broadcast.to(roomName).emit("offer", offer); //Sends Offer to the other peer in the room.
    });
  
    //Triggered when server gets an answer from a peer in the room.
  
    socket.on("answer", function (answer, roomName) {
      socket.broadcast.to(roomName).emit("answer", answer); //Sends Answer to the other peer in the room.
    });
  });
  