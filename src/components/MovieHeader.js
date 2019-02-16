import React, { Component } from "react";
import Rating from "react-rating";
import ReactPlayer from "react-player";
import ActorsList from "./ActorsList";
import Labels from "./Labels";
import Models from "./models";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
class MovieHeader extends Component {
  state = {
    model: false
  };
  toggle = () => {
    this.setState({
      model: !this.state.model
    });
  };
  render() {
    const { movie, trailer, actors } = this.props;
    console.log(movie.genres);
    const headerStyle = {
      backgroundImage: `linear-gradient(rgba(3, 3, 3, 0.30), rgba(0, 0, 5, 0.30)), url(https://image.tmdb.org/t/p/w1400_and_h450_bestv2${
        movie.backdrop_path
      })`
    };
    const getYear = stringDate => {
      const d = new Date(stringDate);
      return d.getFullYear();
    };
    return (
      <div className="raw">
        <div>
          <div className="col-md-3">
            <img
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${
                movie.poster_path
              }`}
              className="img-responsive movie-poster"
            />
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-12">
                <h1 className="movie-title">{movie.original_title}</h1>
                <h4 className="movie-release">{getYear(movie.release_date)}</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p className="movie-vote">
                  {movie.vote_average}
                  <Rating
                    initialRating={movie.vote_average}
                    emptySymbol="fa fa-star-o"
                    fullSymbol="fa fa-star"
                    stop={10}
                    step={2}
                  />
                  <Labels labels={movie.genres} />
                </p>
              </div>
            </div>
            <div className="row movie-overview">
              <div className="col-md-12">
                <h1>Overview</h1>
                <p>{movie.overview}</p>
              </div>
            </div>
            <div className="row movie-billed">
              <div className="col-md-12">
                <h1>Top Billed Cast</h1>
                <ActorsList actors={actors} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieHeader;
