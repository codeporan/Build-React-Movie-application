import React from "react";
import MovieCard from "./blocks/MovieCard";
// import CardLoader from "./blocks/contentloader";
const MoviesCardList = ({ movies }) => {
  const moviesList = () => {
    return (
      movies &&
      movies.map(movie => (
        <div
          className="col-lg-3 col-sm-4 col-md-4 "
          style={{ paddingBottom: 10 }}
          key={movie.id}
        >
          {<MovieCard movie={movie} />}
        </div>
      ))
    );
  };

  return <div className="row align-items-start">{moviesList()}</div>;
};

export default MoviesCardList;
