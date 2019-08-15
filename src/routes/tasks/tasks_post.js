import Joi from "@hapi/joi";

import knex from "../../config/knex";

export default {
  method: "POST",
  path: "/tasks",
  handler: (request, reply) =>
    knex("tasks")
      .insert(request.payload)
      .then(id =>
        reply
          .response({
            status: 201,
            task: {
              id: id[0],
              title: request.payload.title,
              description: request.payload.description
            },
            links: [
              {
                rel: `/linkrels/tasks/${id[0]}/show`,
                uri: `/tasks/${id[0]}`
              },
              {
                rel: `/linkrels/tasks/${id[0]}/delete`,
                uri: `/tasks/${id[0]}`
              },
              {
                rel: `/linkrels/tasks/${id[0]}/done`,
                uri: `/tasks/${id[0]}/done`
              }
            ]
          })
          .code(201)
      )
      .catch(err => reply.response(err)),
  options: {
    validate: {
      payload: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required()
      }),
      headers: {
        "content-type": Joi.string().required()
      },
      options: {
        allowUnknown: true
      }
    }
  }
};