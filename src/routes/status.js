const status = {
  method: "GET",
  path: "/status",
  handler: (request, reply) => ({
    status: "Online",
    username: "Daniel Victor"
  })
};

export default status;
