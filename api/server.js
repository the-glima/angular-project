const jsonServer = require("json-server");
const Data = require("./Data.js");
const data = new Data();
const server = jsonServer.create();

server.use(jsonServer.defaults());

server.get("/api", (req, res) => {
  res.jsonp(data.allData);
});

server.listen(8080);
