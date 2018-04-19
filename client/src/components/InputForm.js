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
    margin: theme.spacing.unit
  },
  textField: {
    margin: theme.spacing.unit,
    width: 182
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
    time: "",
    description: "",
    selectedTab: 0
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
            helperText="Please enter time"
            value={this.state.time}
            onChange={this.handleChangeTime}
          />
        )}
        <FormControl
          className={classes.formControl}
          error
          aria-describedby="description-error-text"
        >
          <InputLabel focused>Description</InputLabel>
          <Input
            id="description-error"
            value={this.state.description}
            onChange={this.handleChangeDescription}
          />
          <FormHelperText id="description-error-text">
            Please enter description
          </FormHelperText>
        </FormControl>
        <div>
          <Button color="primary" className={classes.button}>
            Book Time
          </Button>
          <Button color="secondary" className={classes.button}>
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

const mapStateToProps = ({ time }) => ({
  time
});

export default connect(mapStateToProps, actions)(withStyles(styles)(InputForm));
