import React, { Component } from "react";
import axios from "axios";
import MovieCardList from "../../components/MoviesCardList";
import { connect } from "react-redux";
import Pagination from "react-js-pagination";
import { fetchMovies } from "../../actions/MoviesAction";
import SearchForm from "../../components/blocks/SearchForm";
import MoviesCategoryContainer from "../MovieCategory/MoviesCategoryContainer";
class HomePage extends Component {
  state = {
    movies: [],
    query: ""
  };
  onInput = query => {
    this.setState({
      query
    });
    this.searchMovie(query);
  };
  searchMovie = query => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=cfe422613b250f702980a3bbf9e90716`;
    axios.get(url).then(data => {
      this.setState({
        movies: data.results
      });
    });
  };
  componentDidMount() {
    this.props.dispatch(fetchMovies());
  }
  handlePageChange = pagenumber => {
    this.props.dispatch(fetchMovies(pagenumber));
  };
  render() {
    const isSearched = query => item =>
      !query || item.title.toLowerCase().includes(query.toLowerCase());
    const { query } = this.state;
    const { movies } = this.props.movies;
    return (
      <div>
        <h1 className="text-center page-title">Popular Movies</h1>
        <div className="row">
          <div
            className="col-6 col-lg-2 col-md-2 sidebar-offcanvas"
            id="sidebar"
          >
            <MoviesCategoryContainer />
          </div>
          <div className="col-md-10">
            <SearchForm
              onInput={event => this.onInput(event.target.value)}
              query={this.state.query}
            />
            <MovieCardList
              movies={
                movies.results && movies.results.filter(isSearched(query))
              }
              loading={movies.loading}
            />
          </div>
          {movies ? (
            <div className="col-md-12 text-center">
              <div className="pagination_wrapper">
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
