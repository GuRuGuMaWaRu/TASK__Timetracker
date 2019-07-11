import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import compose from "recompose/compose";
// import { withStyles } from "material-ui/styles";

// import Header from "./Header";
// import Main from "./Main";
// import Footer from "./Footer";
// import "./App.css";
// import { getTasksPage, setPageLimit } from "../actions";
// import { maxTasksPerPage } from "../utils/tasks";

// class App extends Component {
//   componentDidMount() {
//     // 1. Find max number of tasks per page
//     const limit = maxTasksPerPage();
//     // 2. Save max number of tasks in state store
//     this.props.setPageLimit(limit);
//     // 3. Get the 1st page with tasks per page depending on screen size
//     this.props.getTasksPage(1);

//     // window.onresize = event => {
//     //   if (window.innerHeight > window.innerWidth) {
//     //     alert("You are now in portrait");
//     //   } else {
//     //     alert("You are now in landscape");
//     //   }
//     // };
//   }

//   render() {
//     const { classes } = this.props;

//     return (
//       <div className={classes.app}>
//         <Header />
//         <Main />
//         <Footer />
//       </div>
//     );
//   }
// }

const App = () => <div>App</div>;

// const styles = theme => ({
//   app: {
//     display: "flex",
//     flexDirection: "column",
//     height: "100%"
//   }
// });

// App.propTypes = {
//   classes: PropTypes.object.isRequired,
//   getTasksPage: PropTypes.func.isRequired,
//   setPageLimit: PropTypes.func.isRequired
// };

// export default compose(
//   withStyles(styles),
//   connect(
//     null,
//     { getTasksPage, setPageLimit }
//   )
// )(App);
export default App;
