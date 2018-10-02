import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { withStyles } from "material-ui/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Modal from "@material-ui/core/Modal";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";

import { getTasksPage } from "../../actions";
import { isDesktop } from "../../utils/tasks";

import Task from "./Task";

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  nextPage = () => {
    const newPage = this.props.page + 1;

    this.props.getTasksPage(newPage);
  };

  lastPage = () => {
    this.props.getTasksPage(this.props.maxPage);
  };

  prevPage = () => {
    const newPage = this.props.page - 1;

    this.props.getTasksPage(newPage);
  };

  firstPage = () => {
    this.props.getTasksPage(1);
  };

  renderTaskList = () => {
    const desktop = isDesktop();

    return this.props.tasks.map(task => (
      <Task key={task._id} task={task} desktop={desktop} />
    ));
  };

  render() {
    const { classes, page, maxPage } = this.props;

    return (
      <Typography component="div" classes={{ root: classes.taskList }}>
        <div className={classes.list}>{this.renderTaskList()}</div>
        <div className={classes.controls}>
          <IconButton
            className={classes.button}
            color="secondary"
            aria-label="First page"
            onClick={this.firstPage}
            disabled={page === 1}
          >
            <FirstPage />
          </IconButton>
          <IconButton
            className={classes.button}
            color="secondary"
            aria-label="Prev page"
            onClick={this.prevPage}
            disabled={page === 1}
          >
            <ChevronLeft />
          </IconButton>
          <div className={classes.pageNumber}>{page}</div>
          <IconButton
            className={classes.button}
            color="secondary"
            aria-label="Next page"
            onClick={this.nextPage}
            disabled={page === maxPage}
          >
            <ChevronRight />
          </IconButton>
          <IconButton
            className={classes.button}
            color="secondary"
            aria-label="Last page"
            onClick={this.lastPage}
            disabled={page === maxPage}
          >
            <LastPage />
          </IconButton>
        </div>
      </Typography>
    );
  }
}

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
  taskList: PropTypes.shape({
    page: PropTypes.number.isRequired,
    maxPage: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    taskListType: PropTypes.string.isRequired,
    query: PropTypes.string.isRequired
  }),
  getTasksPage: PropTypes.func.isRequired
};

const mapStateToProps = ({ tasks, taskList: { page, maxPage } }) => ({
  tasks,
  page,
  maxPage
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    { getTasksPage }
  )
)(TaskList);
