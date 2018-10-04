import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import compose from "recompose/compose";
import classnames from "classnames";

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
    const { classes, page, maxPage, selectedTask } = this.props;

    return (
      <Typography component="div" classes={{ root: classes.taskList }}>
        <div className={classes.list} onClick={this.handleOpen}>
          {this.renderTaskList()}
        </div>
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
        <Modal
          aria-labelledby={selectedTask.date}
          aria-describedby={selectedTask.description}
          open={this.state.open}
          onClose={this.handleClose}
        >
          <Typography
            component="div"
            className={classnames(classes.paper, {
              [classes.mobileModal]: !isDesktop()
            })}
          >
            <div className={classes.modalTime}>
              <div>{selectedTask.date}</div>
              <div>{selectedTask.duration}</div>
            </div>
            <div>{selectedTask.description}</div>
          </Typography>
        </Modal>
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
  },
  paper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  },
  modalTime: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem"
  },
  mobileModal: {
    width: "80%",
    padding: theme.spacing.unit * 2
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
  selectedTask: PropTypes.shape({
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired
  }),
  getTasksPage: PropTypes.func.isRequired
};

const mapStateToProps = ({
  tasks,
  taskList: { page, maxPage },
  selectedTask
}) => ({
  tasks,
  page,
  maxPage,
  selectedTask
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    { getTasksPage }
  )
)(TaskList);
