import React, { Component } from "react";
import ReactPlayer from "react-player";
import CircularProgressbar from "react-circular-progressbar";
import ActorsList from "./ActorsList";
import { NavLink } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
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
    const key = this.props.videos && this.props.videos.key;
    const url = `https://www.youtube.com/watch?v=${key}`;
    const time_convert = num => {
      var hours = Math.floor(num / 60);
      var minutes = num % 60;
      return hours + "h " + minutes + "m";
    };

    const { movie, actors } = this.props;
    const headerStyle = {
      background: `linear-gradient(rgb(62, 45, 42), rgba(0, 0, 5, 0.2)), url(https://image.tmdb.org/t/p/w1400_and_h450_bestv2${
        movie.backdrop_path
      }) no-repeat scroll 0 0/cover`
    };
    const getYear = stringDate => {
      const d = new Date(stringDate);
      return d.getFullYear().toString();
    };
    function financial(x) {
      return Number.parseFloat(x).toFixed(2);
    }
    return (
      <div>
        <div className="movie-header">
          <div className="movie-header row" style={headerStyle}>
            <div className="col-md-4 margin">
              <div className="image_content ">
                <img
                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${
                    movie.poster_path
                  }`}
                  className="img-responsive movie-poster"
                />
              </div>
            </div>
            <div className="col-md-8 margin">
              <div className="title" dir="auto">
                <span>
                  <NavLink to={`/movies/${movie.id}`}>
                    <h2 className="movie_title">
                      {movie.original_title} (
                      <span className="release_date">
                        {getYear(movie.release_date)}
                      </span>
                      )
                    </h2>
                  </NavLink>
                </span>
              </div>
              <ul className="movie-rating">
                <CircularProgressbar
                  percentage={movie.vote_average * 10}
                  text={movie.vote_average}
                  strokeWidth={10}
                />
              </ul>
              <div className="header_info">
                <h3 dir="auto">Overview</h3>
                <div className="overview" dir="auto">
                  <p>{movie.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
            <div className="row movie-billed">
              <div className="col-md-12">
                <h1>Top Billed Cast</h1>
                <ActorsList actors={actors} />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="right-column">
              <div className="bar">
                <h4>Facts</h4>
                <div className="para">
                  <p>
                    <strong>
                      <bdi>Status </bdi>
                    </strong>
                    {movie.status}
                  </p>
                  <p className="no_bottom_pad">
                    <strong>Release Information </strong>
                    {movie.release_date}
                  </p>
                  <div>
                    <strong>
                      <bdi>Original Language </bdi>
                    </strong>
                    {movie.spoken_languages &&
                      movie.spoken_languages
                        .slice(0, 1)
                        .map(lng => <p key={lng.iso_639_1}>{lng.name}</p>)}
                  </div>
                  <p>
                    <strong>
                      <bdi>Runtime </bdi>
                    </strong>
                    {time_convert(movie.runtime)}
                  </p>
                  <p>
                    <strong>
                      <bdi>Budget </bdi>
                    </strong>

                    {financial(movie.budget)}
                  </p>
                  <p>
                    <strong>
                      <bdi>Revenue </bdi>
                    </strong>
                    {financial(movie.revenue)}
                  </p>
                </div>
                <section className="genres right_column">
                  <h4>
                    <bdi>Genres</bdi>
                  </h4>

                  <ul>
                    {movie.genres &&
                      movie.genres.map(genre => (
                        <li key={genre.id}>
                          <NavLink to={`/genres/${genre.id}/${genre.name}`}>
                            {" "}
                            {genre.name}
                          </NavLink>
                        </li>
                      ))}
                  </ul>
                </section>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="movie-trailer">
              {key ? (
                <ReactPlayer url={url} playing height="90vh" width="100%" />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieHeader;
