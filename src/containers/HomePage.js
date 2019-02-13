import React, { Component } from "react";
import MovieCardList from "../components/MoviesCardList";
import { connect } from "react-redux";
import Pagination from "react-js-pagination";
import { fetchMovies } from "../actions/MoviesAction";
class HomePage extends Component {
  state = {
    movie: []
  };
  componentDidMount() {
    this.props.dispatch(fetchMovies());
  }
  handlePageChange = pagenumber => {
    this.props.dispatch(fetchMovies(pagenumber));
  };
  render() {
    console.log(this.props.movies.movies);
    const { movies } = this.props.movies;

    return (
      <div>
        <h1 className="text-center page-title">Popular Movies</h1>
        <div className="row">
          <div className="col-md-12">
            <MovieCardList movies={movies.results} loading={movies.loading} />
          </div>
          {movies.total_pages}
          {movies ? (
            <div className="col-md-12 text-center">
              <Pagination
                activePage={movies.page}
                itemsCountPerPage={20}
                totalItemsCount={movies.total_results}
                pageRangeDisplayed={5}
                innerClass="pagination"
                itemClass="page-item"
                linkClass="page-link"
                disabledClass="disabled"
                activeClass="active"
                onChange={this.handlePageChange}
              />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
const mapstate = state => ({
  movies: state.movies
});

export default connect(mapstate)(HomePage);
