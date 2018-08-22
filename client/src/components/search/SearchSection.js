import React, { Component, forwardRef } from "react";
import PropTypes from "prop-types";
import compose from "recompose/compose";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import Search from "@material-ui/icons/Search";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

import * as actions from "../../actions";

class SearchSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ""
    };
  }

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

  handleClear = () => {
    this.setState({
      searchQuery: ""
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
            <IconButton
              className={classes.button}
              onClick={this.handleSearch}
              aria-label="Search"
            >
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
          <IconButton
            className={classes.button}
            onClick={getAllTasks}
            aria-label="Show All"
          >
            <ArrowDownward className={classes.arrowDownwardIcon} />
          </IconButton>
        </Hidden>
      </section>
    );
  }
}

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
    flex: "1 1 50%",
    [theme.breakpoints.down("sm")]: {
      marginTop: 0
    }
  },
  searchIcon: {
    marginLeft: theme.spacing.unit,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0
    }
  },
  arrowDownwardIcon: {
    marginLeft: theme.spacing.unit,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0
    }
  }
});

SearchSection.propTypes = {
  classes: PropTypes.object.isRequired,
  searchTasks: PropTypes.func.isRequired,
  getAllTasks: PropTypes.func.isRequired
};

export default compose(
  connect(
    null,
    actions
  ),
  withStyles(styles)
)(SearchSection);
