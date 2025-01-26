import express from "express";
import prisma from "../prismaClient.js";

const router = express.Router();

//Get all todos
router.get("/", async (req, res) => {
  try {
    const todos = await prisma.todo.findMany({
      where: {
        userId: req.userId,
      },
    });

    res.json(todos);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Server error" });
  }
});

//Create a todo
router.post("/", async (req, res) => {
  const { task } = req.body;

  try {
    const todo = await prisma.todo.create({
      data: {
        task,
        userId: req.userId,
      },
    });

    res.json(todo);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Server error" });
  }
});

//Update a todo
router.put("/:id", async (req, res) => {
  const { completed } = req.body;
  const { id } = req.params;

  try {
    const updatedTodo = await prisma.todo.update({
      where: {
        id: parseInt(id),
        userId: req.userId,
      },
      data: {
        completed: !!completed,
      },
    });

    res.json(updatedTodo);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Server error" });
  }
});

//Delete a todo
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const userId = req.userId;

  try {
    await prisma.todo.delete({
      where: {
        id: parseInt(id),
        userId,
      },
    });
    res.json({ message: "Todo deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
