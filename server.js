import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {
  setTimeout(() => next(), 1000);
});

server.use(router);

server.listen(3001, () => {
  console.log("🔥 JSON Server is running with delay on port 3001");
});
