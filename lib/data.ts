export interface Assignment {
  id: number;
  title: string;
  description: string;
  status: string;
}

let assignments: Assignment[] = [
  { id: 1, title: "Lab 1 - Front-end assignment", description: "Build a to-do list app with Next.js", status: "pending" },
  { id: 2, title: "Lab 2 - Swagger", description: "Add Swagger documentation", status: "done" },
];

export default assignments;
