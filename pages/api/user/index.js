import { all, create } from "@/api/user";

export default async function handler(req, res) {
  if (req.method === "GET") {
    all(req, res);
  } else if (req.method === "POST") {
    create(req, res);
  } else {
    res.status(404).json({ message: "Not Fount" });
  }
}
