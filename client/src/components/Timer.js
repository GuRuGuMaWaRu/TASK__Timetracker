import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

import { showTime } from "../utils/timer";

const Timer = ({ time }) => {
  return <div>{showTime(time)}</div>;
};

const mapStateToProps = ({ time }) => ({
  time
});

export default connect(mapStateToProps, actions)(Timer);
