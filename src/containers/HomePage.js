import React, { Component } from "react";
import MovieCardList from "../components/MoviesCardList";
import { connect } from "react-redux";
import axios from "axios";
import {
  fetchMovieByid,
  fetchMovieByReview,
  fetchMovieByVideo,
  fetchMovieByCast,
  fetchMovieByRelated
} from "../actions/MovieAction";
class HomePage extends Component {
  state = {
    movie: []
  };
  componentDidMount() {
    this.props.dispatch(fetchMovieByid());
    this.props.dispatch(fetchMovieByVideo());
    this.props.dispatch(fetchMovieByReview());
    this.props.dispatch(fetchMovieByCast());
    this.props.dispatch(fetchMovieByRelated());
  }
  render() {
    console.log(this.props.movie);
    return (
      <div>
        <h1 className="text-center page-title">Popular Movies</h1>
        <div className="row">
          <div className="col-md-12">
            <MovieCardList />
          </div>
          <div className="col-md-12 text-center">Pagination</div>
        </div>
      </div>
    );
  }
}
const mapstate = state => ({
  movie: state.movie
});

export default connect(mapstate)(HomePage);
