import { Task } from "../../models";

const response_message_builder = (data, task_id) => {
  let response = {};
  if (data.length > 0) 
    response = {
      status: "200",
      data: {
        oid: data[0].oid,
        title: data[0].title,
        description: data[0].description
      },
      links: [
        {
          rel: `/linkrels/tasks/${task_id}/undelete`,
          uri: `/tasks/${task_id}/undelete`
        }
      ]
    }
  else 
    response = {
      status: "400",
      data: "No data to delete"
    }
  return response;
};

const delete_response_code = data => (data.length > 0 ? 200 : 400);

export default {
  method: "DELETE",
  path: "/tasks/{task_id}",
  options: {
    auth: "token"
  },
  handler: (request, reply) => {
    return Task.delete(request.params.task_id).then(tasks => {
      return reply
        .response(response_message_builder(tasks, request.params.task_id))
        .code(delete_response_code(tasks))
      })
    }
};
