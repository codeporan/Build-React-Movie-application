import React, { Component } from "react";
import Discover from "../../components/Discover/discover";
import Sidebar from "../../components/Discover/Sidebar/sidebar";

class SearchFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.defaulFilterstState
    };
  }

  defaulFilterstState = {
    filters: {
      rating: {
        min: 5,
        max: 10
      },
      runtime: {
        min: 45,
        max: 250
      },
      sort_by: {
        value: "vote_average",
        label: "Rating"
      },
      order: {
        value: "desc",
        label: "Descending"
      },
      year: new Date().getFullYear()
    }
  };

  updateStateWithFilters = filters => this.setState({ filters });

  render() {
    return (
      <div className="App-main">
        <div className="App-sidebar-wrapper">
          <Sidebar
            filters={this.state.filters}
            updateFilters={this.updateStateWithFilters}
          />
        </div>
        <div className="App-content-wrapper">
          <Discover
            title="Discover"
            updateFilters={this.updateStateWithFilters}
            filters={this.state.filters}
          />
        </div>
      </div>
    );
  }
}
export default SearchFilter;
