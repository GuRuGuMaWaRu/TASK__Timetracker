const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

const { catchErrors } = require("../handlers/errorHandlers");

router.get("/tasks/getMonth/:date", taskController.getMonth);
router.get("/tasks/getDay/:date", taskController.getDay);
router.get("/tasks/searchTasks/:query", taskController.searchTasks);
router.post("/tasks/addTask", taskController.addTask);

module.exports = router;
