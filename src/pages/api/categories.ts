import { NextApiRequest, NextApiResponse } from "next";
import { Category } from "shared/api";

const mockCategories: Category[] = [
  {
    id: 0,
    title: "Germany",
    applications: [1, 2, 3],
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(mockCategories);
  } else {
    res.status(500).json({ message: "Wrong HTTP method" });
  }
}

export type { Category };
