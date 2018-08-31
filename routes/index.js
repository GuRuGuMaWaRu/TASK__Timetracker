const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

const { catchErrors } = require("../handlers/errorHandlers");

router.get("/tasks/getMonth/:date", catchErrors(taskController.getMonth));
router.get("/tasks/getDay/:date", catchErrors(taskController.getDay));
router.get("/tasks/getAllTasks", catchErrors(taskController.getAllTasks));
router.get(
  "/tasks/searchTasks/:query",
  catchErrors(taskController.searchTasks)
);
router.post("/tasks/addTask", catchErrors(taskController.addTask));
router.get(
  "/tasks/getTasksPage/:page",
  catchErrors(taskController.getTasksPage)
);

module.exports = router;
