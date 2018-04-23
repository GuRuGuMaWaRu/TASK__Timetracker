import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import Search from "@material-ui/icons/Search";
import ArrowDownward from "@material-ui/icons/ArrowDownward";

import * as actions from "../actions";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400
  },
  button: {
    margin: theme.spacing.unit
  },
  searchIcon: {
    marginLeft: theme.spacing.unit
  },
  arrowDownwardIcon: {
    marginLeft: theme.spacing.unit
  }
});

class SearchField extends Component {
  state = {
    searchQuery: ""
  };

  handleSearch = () => {
    if (this.state.searchQuery.length > 0) {
      this.props.searchTasks(this.state.searchQuery);
    }
  };

  handleChange = e => {
    this.setState({
      searchQuery: e.target.value
    });
  };

  render() {
    const { classes, getAllTasks } = this.props;
    const { searchQuery } = this.state;

    return (
      <div>
        <TextField
          id="search-field"
          label="Search tasks by description"
          className={classes.textField}
          margin="normal"
          value={searchQuery}
          onChange={this.handleChange}
        />
        <Button
          className={classes.button}
          variant="raised"
          color="secondary"
          onClick={this.handleSearch}
        >
          Search
          <Search className={classes.searchIcon} />
        </Button>
        <Button
          className={classes.button}
          variant="raised"
          onClick={getAllTasks}
        >
          Show All
          <ArrowDownward className={classes.arrowDownwardIcon} />
        </Button>
      </div>
    );
  }
}

SearchField.propTypes = {
  classes: PropTypes.object.isRequired,
  searchTasks: PropTypes.func.isRequired,
  getAllTasks: PropTypes.func.isRequired
};

export default connect(null, actions)(withStyles(styles)(SearchField));
