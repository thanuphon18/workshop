import prisma from "@/libs/prisma"
import excludeField from "@/libs/excludeField"

export const login = async (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    res.status(422).json({ message: "username, password are require" })
  }

  try {
    const user = await prisma.User.findUnique({
      where: { username, password },
    })

    if (user) {
      const userWithoutPassword = excludeField([user], ["password"])

      // res.json(userWithoutPassword[0]);
      return userWithoutPassword[0]
    } else {
      // res.status(401).json({ message: "Unauthorized" });
      return null
    }
  } catch (error) {
    // res.status(500).json({ message: error.message });
    return null
  }
}

export const all = async (req, res) => {
  try {
    const keyword = req.query.keyword
    let where = {}
    if (keyword) {
      where = {
        OR: [
          { username: { contains: keyword, mode: "insensitive" } },
          { firstName: { contains: keyword, mode: "insensitive" } },
          { lastName: { contains: keyword, mode: "insensitive" } },
          { personalLicenseNumber: { contains: keyword } },
        ],
      }
    }

    const orderBy = {
      updatedAt: "desc",
    }

    const newUer = await prisma.User.findMany({
      where,
      orderBy,
    })
    res.json({ user: newUer })
  } catch (error) {
    res.json({ error: error.message, user: null })
  }
}

export const create = async (req, res) => {
  try {
    const newUer = await prisma.User.create({
      data: req.body,
    })

    res.json({ user: newUer })
  } catch (error) {
    res.json({ error: error.message, user: null })
  }
}

export const update = async (req, res) => {
  try {
    const newUer = await prisma.User.update({
      data: req.body,
      where: { id: Number(req.query.id) },
    })

    res.json({ user: newUer })
  } catch (error) {
    res.json({ error: error.message, user: null })
  }
}

export const remove = async (req, res) => {
  try {
    const newUer = await prisma.User.delete({
      where: { id: Number(req.query.id) },
    })

    res.json({ user: newUer })
  } catch (error) {
    res.json({ error: error.message, user: null })
  }
}

export const getByPassword = async (req, res) => {
  const { password } = req.query

  if (!password) {
    res.status(422).json({ message: "password are require" })
  }

  try {
    const user = await prisma.User.findUnique({
      where: { password },
    })

    if (user) {
      const userWithoutPassword = excludeField([user], ["password"])

      res.json(userWithoutPassword[0])
    } else {
      res.status(404).json({ message: "Not Found" })
    }
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
