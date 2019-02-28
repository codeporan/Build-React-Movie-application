import React, { Component } from "react";
import { connect } from "react-redux";
import Pagination from "react-js-pagination";
import MovieCategoryContainer from "./../MovieCategory/MoviesCategoryContainer";
import { fetchMoviesByGenre } from "../../actions/MoviesAction";
import MovieCardList from "../../components/MoviesCardList";
class GenrePage extends Component {
  componentWillMount() {
    this.props.dispatch(fetchMoviesByGenre(1, this.props.match.params.id));
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.dispatch(fetchMoviesByGenre(1, this.props.match.params.id));
    }
  }
  handlePageChange = pagenumber => {
    this.props.dispatch(
      fetchMoviesByGenre(pagenumber, this.props.match.params.id)
    );
  };
  render() {
    const { genreMovies } = this.props.movies;
    return (
      <div>
        <h1 className="text-center page-title">
          {this.props.match.params.genre}
        </h1>
        <div className="row">
          <div
            className="col-6 col-lg-2 col-md-2 sidebar-offcanvas"
            id="sidebar"
          >
            <MovieCategoryContainer />
          </div>
          <div className="col-md-10">
            <MovieCardList
              movies={genreMovies.results}
              loading={genreMovies.loading}
            />
          </div>
          {genreMovies ? (
            <div className="col-md-12 text-center">
              <Pagination
                activePage={genreMovies.page}
                itemsCountPerPage={20}
                totalItemsCount={genreMovies.total_results}
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
export default connect(mapstate)(GenrePage);
