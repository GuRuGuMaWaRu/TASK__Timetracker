import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import * as actions from "../../actions";
import { months } from "../../utils/dateData";
import "../Calendar/Calendar.css";
import DateSelector from "../Calendar/DateSelector";

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
    // [theme.breakpoints.down("xs")]: {
    //   justifyContent: "space-around",
    //   padding: 0,
    //   "&:last-child": {
    //     paddingBottom: 0
    //   }
    // }
  }
});

class CalendarCard extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    displayedDate: PropTypes.objectOf(PropTypes.string).isRequired,
    currentDate: PropTypes.objectOf(PropTypes.string).isRequired,
    minDate: PropTypes.objectOf(PropTypes.string).isRequired,
    displayedMonth: PropTypes.array.isRequired,
    getDateTasks: PropTypes.func.isRequired,
    getDate: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getDate();
  }

  constructMonth = () => {
    return this.props.displayedMonth.map(cell => {
      return (
        <div
          key={`${cell.className}-${cell.value}`}
          className={`${cell.className} ${cell.withTasks ? "with-tasks" : ""}`}
        >
          {cell.value}
        </div>
      );
    });
  };

  handleDateSelect = e => {
    const element = e.target;

    if (element.classList.contains("with-tasks")) {
      this.props.getDateTasks(
        `${this.props.displayedDate.year},${months.indexOf(
          this.props.displayedDate.month
        )},${element.textContent}`
      );
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

export default withStyles(styles)(
  connect(
    mapStateToProps,
    actions
  )(CalendarCard)
);
