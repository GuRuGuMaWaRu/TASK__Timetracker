import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";

import "../calendar/Calendar.css";
import * as actions from "../../actions";
import { months } from "../../utils/dateData";
import DateSelector from "../calendar/DateSelector";

class CalendarCard extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    displayedDate: PropTypes.objectOf(PropTypes.string).isRequired,
    currentDate: PropTypes.objectOf(PropTypes.string).isRequired,
    minDate: PropTypes.objectOf(PropTypes.string).isRequired,
    displayedMonth: PropTypes.array.isRequired,
    getDate: PropTypes.func.isRequired,
    changeListType: PropTypes.func.isRequired,
    getTasksPage: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getDate();
  }

  constructMonth = () => {
    return this.props.displayedMonth.map(cell => {
      if (cell.withTasks) {
        return (
          <Tooltip
            key={`${cell.className}-${cell.value}`}
            placement="top"
            title={cell.tasks}
            PopperProps={{ style: { pointerEvents: "none" } }}
            classes={{
              tooltip: this.props.classes.tooltip
            }}
          >
            <div className={`${cell.className} with-tasks`}>{cell.value}</div>
          </Tooltip>
        );
      }

      return (
        <div key={`${cell.className}-${cell.value}`} className={cell.className}>
          {cell.value}
        </div>
      );
    });
  };

  handleDateSelect = e => {
    const element = e.target;
    const date = `${this.props.displayedDate.year},${months.indexOf(
      this.props.displayedDate.month
    )},${element.textContent}`;

    if (element.classList.contains("with-tasks")) {
      this.props.changeListType("date", date);
      this.props.getTasksPage(1);
    }
  };

  render() {
    const { classes, displayedDate, currentDate, minDate } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography component="div" className={classes.selectors}>
            <DateSelector
              dateType="year"
              displayedDate={displayedDate}
              currentDate={currentDate}
              minDate={minDate}
            />
            <DateSelector
              dateType="month"
              displayedDate={displayedDate}
              currentDate={currentDate}
              minDate={minDate}
            />
          </Typography>

          <Typography component="div">
            <section className="month-dates" onClick={this.handleDateSelect}>
              {this.constructMonth()}
            </section>
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

const styles = theme => ({
  card: {
    flex: "2 1",
    [theme.breakpoints.down("sm")]: {
      flex: "1 0 auto"
    }
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    userSelect: "none"
  },
  tooltip: {
    position: "relative",
    top: "2rem !important"
  }
});

const mapStateToProps = ({
  displayedDate,
  currentDate,
  minDate,
  displayedMonth
}) => ({
  displayedDate,
  currentDate,
  minDate,
  displayedMonth
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    actions
  )
)(CalendarCard);
