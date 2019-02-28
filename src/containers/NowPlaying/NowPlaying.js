import React, { Component } from "react";
import MovieCardList from "../../components/MoviesCardList";
import { connect } from "react-redux";
import Pagination from "react-js-pagination";
import { fetchMovies } from "../../actions/MoviesAction";
class NowPlaying extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMovies(1, "now_playing"));
  }
  handlePageChange = pagenumber => {
    this.props.dispatch(fetchMovies(pagenumber, "now_playing"));
  };
  render() {
    const { movies } = this.props.movies;

    return (
      <div>
        <h1 className="text-center page-title">NowPlaying Movies</h1>
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

export default connect(mapstate)(NowPlaying);
