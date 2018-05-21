import React, { Component } from "react";
import { connect } from "react-redux";
import Typography from "material-ui/Typography";

import * as actions from "../actions";
import "./FlashMsg.css";

class flashMsg extends Component {
  state = {
    timer: 0
  };

  componentDidMount() {
    const timer = setTimeout(this.props.hideAddMsg, 2000);

    this.setState({
      timer
    });
  }

  componentWillUnmount() {
    clearTimeout(this.state.timer);
  }

  render() {
    return (
      <Typography type="div" className="flash-message">
        Congratulations! You've added a new task
      </Typography>
    );
  }
}

export default connect(null, actions)(flashMsg);
