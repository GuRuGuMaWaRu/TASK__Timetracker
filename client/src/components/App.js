import React, { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";

import * as actions from "../actions";
import Header from "./Header";
import Timer from "./Timer";
import InputForm from "./InputForm";

const Content = () => {
  return <div>Content</div>;
};
const Footer = () => {
  return <div>Footer</div>;
};

class App extends Component {
  state = {
    tasks: [],
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

  getDay = async () => {
    const date = "2014,11,23";

    const tasks = await axios.get(`http://localhost:5000/tasks/getDay/${date}`);

    this.setState({
      tasks: tasks.data
    });
  };

  searchTasks = async () => {
    const searchQuery = "Swim";

    const tasks = await axios.get(
      `http://localhost:5000/tasks/searchTasks/${searchQuery}`
    );

    this.setState({
      tasks: tasks.data
    });
  };

  render() {
    const { addTask } = this.props;

    return (
      <div>
        <Header />
        <Timer />
        <InputForm />
        <Footer />
        <button onClick={addTask}>Add task</button>
        <button onClick={this.getMonth}>Get month</button>
        <button onClick={this.getDay}>Get tasks for the date</button>
        <button onClick={this.searchTasks}>Search for the tasks</button>
        <div>
          {this.state.days.map((day, index) => (
            <div key={`${day}-${index}`}>{day}</div>
          ))}
        </div>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={task._id}>
              {task.time} - {task.description}
            </li>
          ))}
        </ul>
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
