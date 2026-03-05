export interface Assignment {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  dueDate: string;
  status: "on process" | "complete" | "submitted";
}

let assignments: Assignment[] = [
  {
    id: 1,
    title: "Lab 1 - REST API",
    description: "Build REST API with Next.js",
    createdAt: new Date().toISOString(),
    dueDate: "2025-03-10",
    status: "on process",
  },
  {
    id: 2,
    title: "Assignment 2 - Calculus homework",
    description: "Need to submit before mid exam",
    createdAt: new Date().toISOString(),
    dueDate: "2025-03-17",
    status: "submitted",
  },
];

export default assignments;
