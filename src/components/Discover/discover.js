import React, { Component } from "react";
import List from "../MoviesCardList";
import Dropdown from "react-dropdown";
import Pagination from "react-js-pagination";
import { getMovie } from "../../actions/MoviesAction";
import { connect } from "react-redux";
const DEFAULT_PAGE = 1;
class Discover extends Component {
  state = {
    discover: []
  };

  componentDidMount = () => {
    this.getMovies(DEFAULT_PAGE);
  };

  getMovies = page => {
    this.props
      .dispatch(
        getMovie(`page=${page}&primary_release_year=${this.props.filters.year}
      &vote_average.gte=${this.props.filters.rating.min}
      &vote_average.lte=${this.props.filters.rating.max}
      &with_runtime.gte=${this.props.filters.runtime.min}
      &with_runtime.lte=${this.props.filters.runtime.max}
      &sort_by=${this.props.filters.sort_by.value}.${
          this.props.filters.order.value
        }`)
      )
      .then(res => {
        this.setState({
          discover: res.payload
        });
      });
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.filters !== this.props.filters) {
      this.getMovies(DEFAULT_PAGE);
    }
  };
  setMovies = () => {
    const oldResults =
      this.state.discover.page !== 1 ? this.state.discover.results : [];

    const updatedResults = [...oldResults, ...this.state.discover.results];

    this.setState({
      movies: { discover: { updatedResults, ...this.state.discover.page } }
    });
  };
  handlePageChange = page => {
    this.getMovies(page);
  };

  render() {
    const { page, results, total_results } = this.state.discover;
    const sort_by = [
      { value: "popularity", label: "Popularity" },
      { value: "vote_average", label: "Rating" },
      { value: "original_title", label: "Original Title" }
    ];
    const sort_by_order = [
      { value: "asc", label: "Ascending" },
      { value: "desc", label: "Descending" }
    ];
    return (
      <div className="Main-wrapper">
        <h1 className="App-main-title Discover-main-title">
          {this.props.title}
        </h1>
        <div className="sort-order">
          <div className="sort-order__item">
            <span className="sort-order-label">Sort by</span>
            <Dropdown
              className="test"
              options={sort_by}
              value={`${this.props.filters.sort_by.label}`}
              onChange={sort_by =>
                this.props.updateFilters({
                  ...this.props.filters,
                  sort_by: sort_by
                })
              }
            />
          </div>
          <div className="sort-order__item">
            <span className="sort-order-label">Order by</span>
            <Dropdown
              className="test"
              options={sort_by_order}
              value={`${this.props.filters.order.label}`}
              onChange={order =>
                this.props.updateFilters({
                  ...this.props.filters,
                  order: order
                })
              }
            />
          </div>
        </div>
        {results && <List movies={results} />}

        <div className="col-md-12 text-center">
          <div className="pagination_wrapper">
            <Pagination
              activePage={page}
              itemsCountPerPage={20}
              totalItemsCount={total_results}
              pageRangeDisplayed={5}
              innerClass="pagination"
              itemClass="page-item"
              linkClass="page-link"
              disabledClass="disabled"
              activeClass="active"
              onChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapstate = state => ({
  movie: state.movies
});
export default connect(mapstate)(Discover);
