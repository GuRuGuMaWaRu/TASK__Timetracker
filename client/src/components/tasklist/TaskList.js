import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import compose from "recompose/compose";
import classnames from "classnames";
import { withStyles } from "material-ui/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";

import { getTasksPage, changePage } from "../../actions";
import { isDesktop, maxTasksPerPage } from "../../utils/tasks";

import Task from "./Task";

const TaskList = ({ classes, tasks, page, getTasksPage, changePage }) => {
  const desktop = isDesktop();
  const list = tasks.map(task => (
    <Task key={task._id} task={task} desktop={desktop} />
  ));

  const nextPage = () => {
    console.log("nextPage function");
    const limit = maxTasksPerPage();
    const newPage = page + 1;
    console.log("limit:", limit);
    console.log("newPage:", newPage);

    getTasksPage(newPage, limit);
    changePage(newPage);
  };

  return (
    <Typography component="div" classes={{ root: classes.taskList }}>
      <div className={classes.list}>{list}</div>
      <div
        className={classnames(classes.controls, {
          [classes.controlsDesktop]: desktop
        })}
      >
        <IconButton
          className={classes.button}
          color="secondary"
          aria-label="First page"
        >
          <FirstPage />
        </IconButton>
        <IconButton
          className={classes.button}
          color="secondary"
          aria-label="Prev page"
        >
          <ChevronLeft />
        </IconButton>
        <div className={classes.pageNumber}>{page}</div>
        <IconButton
          className={classes.button}
          color="secondary"
          aria-label="Next page"
          onClick={nextPage}
        >
          <ChevronRight />
        </IconButton>
        <IconButton
          className={classes.button}
          color="secondary"
          aria-label="Last page"
        >
          <LastPage />
        </IconButton>
      </div>
    </Typography>
  );
};

const styles = theme => ({
  taskList: {
    display: "flex !important",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: "2 1"
  },
  list: {
    display: "flex",
    flexDirection: "column",
    flex: "2 1"
  },
  controls: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  controlsDesktop: {
    // paddingBottom: "10px"
  },
  pageNumber: {
    fontSize: "1.2rem",
    margin: "0 14px"
  },
  button: {
    margin: theme.spacing.unit,
    [theme.breakpoints.down("xs")]: {
      margin: 0
    }
  }
});

TaskList.propTypes = {
  classes: PropTypes.object.isRequired,
  tasks: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  getTasksPage: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired
};

const mapStateToProps = ({ tasks, taskList }) => ({
  tasks,
  page: taskList.page
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    { getTasksPage, changePage }
  )
)(TaskList);
