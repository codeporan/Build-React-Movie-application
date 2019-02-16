import React, { Component } from "react";
import { connect } from "react-redux";
import MovieHeader from "../components/MovieHeader";
import MovieReview from "../components/ReviewsList";
import RelatedMovie from "../components/MoviesCardList";

import {
  fetchMovieByCast,
  fetchMovieByRelated,
  fetchMovieByReview,
  fetchMovieByVideo,
  fetchMovieByid,
  clearingMovieState
} from "../actions/MovieAction";
class MoviePage extends Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    console.log("First page", id);
    this.props.dispatch(fetchMovieByid(id));
    this.props.dispatch(fetchMovieByCast(id));
    this.props.dispatch(fetchMovieByReview(id));
    this.props.dispatch(fetchMovieByVideo(id));
    this.props.dispatch(fetchMovieByRelated(id));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.dispatch(clearingMovieState());
      const { id } = this.props.match.params;
      console.log("up", id);
      this.props.dispatch(fetchMovieByid(id));
      this.props.dispatch(fetchMovieByCast(id));
      this.props.dispatch(fetchMovieByReview(id));
      this.props.dispatch(fetchMovieByVideo(id));
      this.props.dispatch(fetchMovieByRelated(id));
    }
  }
  componentWillUnmount() {
    this.props.dispatch(clearingMovieState());
  }

  render() {
    const {
      movie_details,
      movie_videos,
      actors,
      relatedMovies,
      reviews
    } = this.props.movie;
    // const movies = movie_videos.filter(item => item.site === "Youtube")[0];
    // console.log(movies);

    return (
      <div className="row">
        <div className="col-md-12">
          <MovieHeader
            movie={movie_details}
            // trailer={movie_videos}
            actors={actors}
          />
        </div>
        <div className="col-md-12">
          {reviews.length > 0 ? (
            <div className="col-md-12">
              <MovieReview reviews={reviews} />
            </div>
          ) : null}
          {relatedMovies.length > 0 ? (
            <div className="col-md-12">
              <RelatedMovie movies={relatedMovies} />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
const mapstate = state => ({
  movie: state.movie
});
export default connect(mapstate)(MoviePage);
