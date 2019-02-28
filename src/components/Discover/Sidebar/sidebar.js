import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Filters from "../Filter/Filters";

// import "./sidebar.css";

class Sidebar extends Component {
  render() {
    const currentPath = window.location.pathname;

    return (
      <div className="App-sidebar">
        {currentPath === "/discover" && (
          <Filters
            filters={this.props.filters}
            updateFilters={this.props.updateFilters}
          />
        )}
      </div>
    );
  }
}

export default Sidebar;
