import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import compose from "recompose/compose";
import classnames from "classnames";
import { withStyles } from "material-ui/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import PlayArrow from "@material-ui/icons/PlayArrow";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";

import { getAllTasks } from "../../actions";
import { isDesktop } from "../../utils/tasks";
import Task from "./Task";

const TaskList = ({ classes, tasks }) => {
  const list = tasks.map(task => <Task key={task._id} task={task} />);

  return (
    <Typography component="div" classes={{ root: classes.taskList }}>
      {list}
      <div
        className={classnames(classes.controls, {
          [classes.controlsDesktop]: isDesktop()
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
        <div className={classes.pageNumber}>5</div>
        <IconButton
          className={classes.button}
          color="secondary"
          aria-label="Next page"
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
    height: "100%"
    // justifyItems: "space-between"
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
  getAllTasks: PropTypes.func.isRequired
};

const mapStateToProps = ({ tasks }) => ({ tasks });

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    { getAllTasks }
  )
)(TaskList);