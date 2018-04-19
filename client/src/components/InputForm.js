import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import Input, { InputLabel } from "material-ui/Input";
import { FormControl, FormHelperText } from "material-ui/Form";
import TextField from "material-ui/TextField";
import Tabs, { Tab } from "material-ui/Tabs";

import * as actions from "../actions";

const styles = theme => ({
  root: theme.mixins.gutters({
    flexGrow: 1,
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    textAlign: "center"
  }),
  button: {
    margin: theme.spacing.unit
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    width: 280
  },
  textField: {
    margin: theme.spacing.unit,
    width: 280
  }
});

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

class InputForm extends React.Component {
  state = {
    time: "00:00",
    description: "",
    selectedTab: 0,
    errorTime: 0,
    errorDescription: 0,
    errorTimeoutID: null
  };

  componentWillUnmount() {
    window.clearTimeout(this.state.errorTimeoutID);
  }

  validateTime = () => {
    const timeToArr = this.state.time.split(":").map(parseFloat);
    return timeToArr.every(time => time === 0);
  };

  validateInput = () => {
    window.clearTimeout(this.state.errorTimeoutID);

    const timeError = this.validateTime();
    const descriptionError = this.state.description.length === 0;

    if (timeError || descriptionError) {
      if (timeError) {
        this.setState({ errorTime: 1 });
      }
      if (descriptionError) {
        this.setState({ errorDescription: 1 });
      }

      const errorTimeout = window.setTimeout(() => {
        this.setState({
          errorTime: 0,
          errorDescription: 0
        });
      }, 2000);

      this.setState({ errorTimeoutID: errorTimeout });
    }
  };

  handleChangeTab = (event, value) => {
    this.setState({ selectedTab: value });
  };

  handleChangeDescription = e => {
    this.setState({
      description: e.target.value
    });
  };

  handleChangeTime = e => {
    this.setState({
      time: e.target.value
    });
  };

  handleBookTime = () => {
    this.validateInput();

    if (this.state.errorTime === 0 && this.state.errorDescription === 0) {
      if (this.state.selectedTab === 0) {
        window.clearInterval(this.props.timerID);
      }

      this.props.bookTime({
        time: this.state.time,
        description: this.state.description,
        custom: this.state.selectedTab === 1 ? true : false
      });

      this.setState({
        time: "00:00",
        description: ""
      });
    }
  };

  handleClear = () => {
    this.setState({
      description: "",
      time: "00:00"
    });
  };

  render() {
    const { classes } = this.props;
    const { selectedTab } = this.state;

    const timerInput = (
      <div className={classes.container}>
        {this.state.selectedTab === 1 && (
          <TextField
            id="time"
            type="time"
            label="Time"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            error={this.state.errorTime === 1}
            helperText={this.state.errorTime === 1 ? "Please enter time" : ""}
            value={this.state.time}
            onChange={this.handleChangeTime}
          />
        )}
        <TextField
          id="description"
          type="string"
          label="Description"
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
          error={this.state.errorDescription === 1}
          helperText={
            this.state.errorDescription === 1 ? "Please enter description" : ""
          }
          value={this.state.description}
          onChange={this.handleChangeDescription}
        />
        <div>
          <Button
            color="primary"
            className={classes.button}
            onClick={this.handleBookTime}
          >
            Book Time
          </Button>
          <Button
            color="secondary"
            className={classes.button}
            onClick={this.handleClear}
          >
            Clear
          </Button>
        </div>
      </div>
    );

    return (
      <Paper className={classes.root}>
        <Tabs
          value={this.state.selectedTab}
          onChange={this.handleChangeTab}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Book From Timer" />
          <Tab label="Book Custom Time" />
        </Tabs>
        {selectedTab === 0 && <TabContainer>{timerInput}</TabContainer>}
        {selectedTab === 1 && <TabContainer>{timerInput}</TabContainer>}
      </Paper>
    );
  }
}

const mapStateToProps = ({ time, timerID }) => ({
  time,
  timerID
});

export default connect(mapStateToProps, actions)(withStyles(styles)(InputForm));
