import Hapi from "@hapi/hapi";

import { root, status } from "./routes";

const server = new Hapi.Server({
  port: process.env.PORT || 8000
});

const init = async () => {
  server.route([].concat(root).concat(status));

  await server.start();
  console.log("Server is running");
};

init();
