// express setup
const express = require("express");
const server = express();
const PORT = 3000;
server.use(express.json());

// knex setup
const knex = require("knex");
const knexConfig = require("./knexfile");
const db = knex(knexConfig["development"]);
const table = "books";

server.get("/api/books", async (req, res) => {
  const books = await db.select("*").from(table); //JSON in array
  res.status(200).json(books); // jsonでなくsendでも同じ？
});

server.post("/api/books", async (req, res) => {
  const request = req.body; //JSON in array
  await db.insert(request).into(table);
  res.status(201).send();
});

server.put("/api/books/:idOrName", async (req, res) => {
  const idOrName = req.params.idOrName;
  if (Number.isNaN(Number(idOrName))) {
    // idOrNameが数字でない = nameの場合
    await db(table).where("name", idOrName).update(req.body);
  } else {
    // idOrNameが数字 = idの場合
    await db(table).where("id", Number(idOrName)).update(req.body);
  }
  res.status(200).send();
});

server.delete("/api/books/:idOrName", async (req, res) => {
  const idOrName = req.params.idOrName;
  if (Number.isNaN(Number(idOrName))) {
    // idOrNameが数字でない = nameの場合
    await db(table).where("name", idOrName).del();
  } else {
    // idOrNameが数字 = idの場合
    await db(table).where("id", Number(idOrName)).del();
  }
  res.status(204).send();
});

server.listen(PORT, () => {
  console.log("Server is running on port 3000!!!!");
});

module.exports = { server };
