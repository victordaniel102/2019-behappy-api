import { what } from "../../models";

export default {
  method: "GET",
  path: "/what",
  handler: (request, reply) => what.getAll()
};