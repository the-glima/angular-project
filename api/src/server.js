const jsonServer = require("json-server");
const DataBase = require("./DataBase.js");
const db = new DataBase();
const server = jsonServer.create();

server.use(jsonServer.defaults());

server.get("/api", (req, res) => {
  res.jsonp(db.allData);
});

server.listen(8080);
