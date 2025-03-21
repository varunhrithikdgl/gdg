const express = require("express");
const { addTask, updateTask, deleteTask } = require("../controllers/taskController");

const router = express.Router();

router.post("/add", addTask);
router.put("/update", updateTask);
router.delete("/delete", deleteTask);

module.exports = router;
