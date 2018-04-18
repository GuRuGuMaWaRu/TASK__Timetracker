import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import * as actions from "../actions";

const Header = () => {
  return <div>Header</div>;
};
const Content = () => {
  return <div>Content</div>;
};
const Footer = () => {
  return <div>Footer</div>;
};

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
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

// export default connect(mapStateToProps, actions)(App);
