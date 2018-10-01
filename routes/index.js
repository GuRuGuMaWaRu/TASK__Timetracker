const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

const { catchErrors } = require("../handlers/errorHandlers");

router.get("/tasks/getMonth/:date", catchErrors(taskController.getMonth));
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
