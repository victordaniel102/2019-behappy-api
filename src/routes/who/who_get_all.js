import { who } from "../../models";

export default {
  method: "GET",
  path: "/who",
  handler: (request, reply) => who.getAll()
};