import React, { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import * as actions from "../actions";

const Header = () => {
  return <div>Header</div>;
};
const Content = () => {
  return <div>Content</div>;
};
const Footer = () => {
  return <div>Footer</div>;
};

class App extends Component {
  state = {
    tasks: "no tasks",
    days: []
  };

  getMonth = async () => {
    const date = "2014,11";

    const tasks = await axios.get(
      `http://localhost:5000/tasks/getMonth/${date}`
    );

    const taskDays = tasks.data.map(task => task.day);
    const days = Array.from(new Set(taskDays));

    this.setState({
      days: days
    });
  };

  render() {
    const { addTask } = this.props;

    return (
      <div>
        <Header />
        <Content />
        <Footer />
        <button onClick={addTask}>Add task</button>
        <button onClick={this.getMonth}>Get month</button>
        <div>
          {this.state.days.map((day, index) => (
            <div key={`${day}-${index}`}>{day}</div>
          ))}
        </div>
      </div>
    );
  }
}

// App.propTypes = {
//   auth: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
// };

// const mapStateToProps = ({ auth }) => ({
//   auth
// });

export default connect(null, actions)(App);
