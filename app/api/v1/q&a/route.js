export const data = [
  {
    id: "1",
    title: "JS",
    description: "what is js?",
    createdTime: "",
    answers: [
      { ansText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam libero cupiditate nobis voluptas commodi ex porro corrupti officia." },
    ],
  },
  {
    id: "2",
    title: "HTML",
    description: "What is HTML?",
    createdTime: "",
    answers: [
      { ansText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam libero cupiditate nobis voluptas commodi ex porro corrupti officia." },
    ],
  },
  {
    id: "3",
    title: "CSS",
    description: "What is CSS?",
    createdTime: "",
    answers: [
      { ansText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam libero cupiditate nobis voluptas commodi ex porro corrupti officia." },
    ],
  },
  {
    id: "4",
    title: "React",
    description: "what is React?",
    createdTime: "",
    answers: [
      { ansText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam libero cupiditate nobis voluptas commodi ex porro corrupti officia." },
    ],
  },
];

export async function GET() {
  return Response.json(data);
}
