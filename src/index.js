const jsonServer = require("json-server");
const auth = require("json-server-auth");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));

server.db = router.db;

server.use(auth);
server.use(router);

server.listen(8888, () => {
  console.log("JSON Server is running");
});
