import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import Search from "@material-ui/icons/Search";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Hidden from "@material-ui/core/Hidden";
import withWidth from "@material-ui/core/withWidth";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import * as actions from "../../actions";

const styles = theme => ({
  section: {
    display: "flex",
    alignItems: "center"
  },
  searchForm: {
    display: "flex",
    alignItems: "center",
    flex: "1 1 auto"
  },
  textField: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
    // minWidth: 400,
    // [theme.breakpoints.down("sm")]: {
    //   width: "100%"
    // }
    flex: "1 1 50%"
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

  handleSearch = e => {
    e.preventDefault();

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
      <section className={classes.section}>
        <form className={classes.searchForm} onSubmit={this.handleSearch}>
          <TextField
            id="search-field"
            label="Search by description"
            className={classes.textField}
            margin="normal"
            value={searchQuery}
            onChange={this.handleChange}
          />
          <Hidden smDown>
            <Button
              className={classes.button}
              variant="raised"
              color="secondary"
              type="submit"
              aria-label="Search"
            >
              Search
              <Search className={classes.searchIcon} />
            </Button>
          </Hidden>
          <Hidden mdUp>
            <IconButton className={classes.button} aria-label="Search">
              <Search className={classes.searchIcon} />
            </IconButton>
          </Hidden>
        </form>
        <Hidden smDown>
          <Button
            className={classes.button}
            variant="raised"
            onClick={getAllTasks}
            aria-label="Show All"
          >
            Show All
            <ArrowDownward className={classes.arrowDownwardIcon} />
          </Button>
        </Hidden>
        <Hidden mdUp>
          <IconButton className={classes.button} aria-label="Show All">
            <ArrowDownward className={classes.arrowDownwardIcon} />
          </IconButton>
        </Hidden>
        <Hidden mdUp>
          <IconButton className={classes.button} aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Hidden>
      </section>
    );
  }
}

SearchField.propTypes = {
  classes: PropTypes.object.isRequired,
  searchTasks: PropTypes.func.isRequired,
  getAllTasks: PropTypes.func.isRequired
};

export default connect(
  null,
  actions
)(withStyles(styles)(SearchField));
