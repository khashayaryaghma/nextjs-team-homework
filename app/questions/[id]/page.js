import { getQues } from "@/utils/dataServices";

async function page({ params }) {
  const data = await getQues(params.id);
  return <div>{data.title}</div>;
}

export default page;
