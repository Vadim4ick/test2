const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// ❌ Не нужно server.listen()
// ✅ Вместо этого экспортируем handler
module.exports = server;
