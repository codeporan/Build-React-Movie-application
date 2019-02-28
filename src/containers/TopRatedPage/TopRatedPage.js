import React, { Component } from "react";
import MovieCardList from "../../components/MoviesCardList";
import { connect } from "react-redux";
import Pagination from "react-js-pagination";
import { fetchMovies } from "../../actions/MoviesAction";
class TopRatedPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMovies(1, "top_rated"));
  }
  handlePageChange = pagenumber => {
    this.props.dispatch(fetchMovies(pagenumber, "top_rated"));
  };
  render() {
    const { movies } = this.props.movies;

    return (
      <div>
        <h1 className="text-center page-title">Top Rated Movies</h1>
        <div className="row">
          <div className="col-md-12">
            <MovieCardList movies={movies.results} loading={movies.loading} />
          </div>
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

export default connect(mapstate)(TopRatedPage);
