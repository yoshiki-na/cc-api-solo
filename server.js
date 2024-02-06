const express = require("express");
const server = express();
const PORT = 3000;
server.use(express.json());

server.get("/api/books", (req, res) => {
  res.status(200).send("books JSON");
});

server.listen(PORT, () => {
  console.log("Server is running on port 3000!!!!");
});

module.exports = { server };
