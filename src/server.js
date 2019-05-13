import Hapi from "@hapi/hapi";

import { root } from "./routes";

const server = new Hapi.Server({
  port: process.env.PORT || 8000
});

const init = async () => {
  server.route([].concat(root));

  await server.start();
  console.log("Server is running");
};

init();
