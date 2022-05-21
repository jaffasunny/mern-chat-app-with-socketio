const express = require("express");
const dotnv = require("dotenv");
const { chats } = require("./data/data");

const app = express();

app.get("/", (req, res) => {
  res.send("API is Running Successfully");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  //   console.log(req.params.id);
  const signleChat = chats.find((c) => c._id === req.params.id);
  res.send(signleChat);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
