import { v4 } from "uuid";
import { data } from "../route";

export async function GET(req, { params }) {
  const obj = data.find((item) => {
    return params.id === item.id;
  });

  return Response.json(obj);
}

export async function PATCH(req, { params }) {
  const body = await req.json();
  const index = data.findIndex((user) => user.id === params.id);
  data[index].answers.push({ ...body, id: v4() });
  return Response.json(data[index]);
}

export async function DELETE(req, { params }) {
  const index = data.findIndex((user) => user.id === params.id);
  const deleted = data[index];
  data.splice(index, 1);
  return Response.json(deleted);
}
