import React from "react";
import { NavLink } from "react-router-dom";
import { Card, CardBody, CardTitle, CardImg } from "reactstrap";

//import './styles/MovieCard.css';

const MovieCard = ({ movie, loading, hideOverview }) => {
  const getYear = stringDate => {
    const d = new Date(stringDate);
    return d.getFullYear();
  };
  return (
    <Card className="movie-card">
      <CardImg
        top
        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${
          movie.poster_path
        }`}
        alt={movie.original_title}
        className="movie-card__poster"
      />
      <h1 className="movie-card__vote">
        {/* <sup>{Math.floor(movie.vote_average) || 0}</sup> */}
        {/* {movie.vote_average.toString()} */}

        {movie.vote_average.toString().split(".")[0]}
        <sup>.{movie.vote_average.toString().split(".")[1] || 0}</sup>
      </h1>
      <CardBody className="movie-card__body">
        <CardTitle className="movie-card__title">
          <NavLink to={`/movies/${movie.id}`}>{movie.original_title}</NavLink>
        </CardTitle>
        <span className="movie-card__release-date">
          {getYear(movie.release_date) || "Unknown Released Date"}
        </span>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
