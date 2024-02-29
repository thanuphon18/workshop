import { update, remove } from "@/api/user"

export default async function handler(req, res) {
  if (req.method === "PUT") {
    update(req, res)
  } else if (req.method === "DELETE") {
    remove(req, res)
  } else {
    res.status(404).json({ message: "Not Fount" })
  }
}
