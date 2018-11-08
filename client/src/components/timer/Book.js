import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DateRangeIcon from "@material-ui/icons/DateRange";

import BookDialog from "./BookDialog";
import { stopTimer, startEdit } from "../../actions";
import { isDesktop } from "../../utils/tasks";
import CalendarDialog from "./CalendarDialog";
class Book extends Component {
  state = {
    openBook: false,
    openCalendar: false
  };

  handleOpenBook = () => {
    if (this.props.timerIsRunning) {
      this.props.stopTimer();
    }
    this.props.startEdit();
    this.setState({ openBook: true });
  };

  handleOpenCalendar = () => {
    this.setState({ openCalendar: true });
  };

  handleCloseBook = () => {
    this.setState({ openBook: false });
  };

  handleCloseCalendar = () => {
    this.setState({ openCalendar: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.view}>
        {!isDesktop() && (
          <IconButton
            className={classes.calendarButton}
            aria-label="Calendar"
            onClick={this.handleOpenCalendar}
          >
            <DateRangeIcon />
          </IconButton>
        )}

        <Button
          variant="outlined"
          color="secondary"
          className={classes.button}
          onClick={this.handleOpenBook}
        >
          book
        </Button>
        <BookDialog
          isOpen={this.state.openBook}
          handleClose={this.handleCloseBook}
        />
        {!isDesktop() && (
          <CalendarDialog
            isOpen={this.state.openCalendar}
            handleClose={this.handleCloseCalendar}
          />
        )}
      </div>
    );
  }
}

const styles = theme => ({
  view: {
    display: "flex",
    alignItems: "center"
  },
  button: {
    margin: theme.spacing.unit,
    [theme.breakpoints.down("xs")]: {
      margin: 0,
      padding: 0,
      minWidth: "60px"
    }
  }
});

Book.propTypes = {
  classes: PropTypes.object.isRequired,
  timerIsRunning: PropTypes.bool.isRequired,
  stopTimer: PropTypes.func.isRequired,
  startEdit: PropTypes.func.isRequired
};

const mapStateToProps = ({ timerIsRunning }) => ({ timerIsRunning });

export default compose(
  connect(
    mapStateToProps,
    { stopTimer, startEdit }
  ),
  withStyles(styles)
)(Book);
