const express = require("express");
const { v4: uuidv4 } = require("uuid");
const Task = require("../models/Task");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

// All task routes require authentication
router.use(authMiddleware);

// GET /api/tasks
router.get("/", (req, res) => {
  const tasks = Task.findByUserId(req.userId);
  res.json({ data: tasks });
});

// POST /api/tasks
router.post("/", (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({
      error: { code: "MISSING_TITLE", message: "Task title is required" },
    });
  }

  const task = Task.create({
    id: uuidv4(),
    userId: req.userId,
    title,
    description: description || "",
    completed: false,
    createdAt: new Date().toISOString(),
  });

  res.status(201).json({ data: task });
});

// PUT /api/tasks/:id
router.put("/:id", (req, res) => {
  const task = Task.findById(req.params.id);

  if (!task) {
    return res.status(404).json({
      error: { code: "NOT_FOUND", message: "Task not found" },
    });
  }

  if (task.userId !== req.userId) {
    return res.status(403).json({
      error: { code: "FORBIDDEN", message: "You can only update your own tasks" },
    });
  }

  const updated = Task.update(req.params.id, req.body);
  res.json({ data: updated });
});

// DELETE /api/tasks/:id
router.delete("/:id", (req, res) => {
  const task = Task.findById(req.params.id);

  if (!task) {
    return res.status(404).json({
      error: { code: "NOT_FOUND", message: "Task not found" },
    });
  }

  if (task.userId !== req.userId) {
    return res.status(403).json({
      error: { code: "FORBIDDEN", message: "You can only delete your own tasks" },
    });
  }

  Task.delete(req.params.id);
  res.status(204).send();
});

module.exports = router;
