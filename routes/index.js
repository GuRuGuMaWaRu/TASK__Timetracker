const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

const { catchErrors } = require("../handlers/errorHandlers");

router.get("/tasks/getMonth/:date", catchErrors(taskController.getMonth));
// router.get("/tasks/getDay/:date", catchErrors(taskController.getDay));
// router.get("/tasks/getAllTasks", catchErrors(taskController.getAllTasks));
router.post("/tasks/addTask", catchErrors(taskController.addTask));
router.get(
  "/tasks/getTasksGeneral/:pageData",
  catchErrors(taskController.getTasksGeneral)
);
router.get(
  "/tasks/getTasksSearch/:pageData",
  catchErrors(taskController.getTasksSearch)
);
router.get(
  "/tasks/getTasksDate/:pageData",
  catchErrors(taskController.getTasksDate)
);

module.exports = router;
