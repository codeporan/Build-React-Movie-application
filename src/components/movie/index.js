import React from "react";
import { Link } from "react-router-dom";

// import IconText from "../common/icon-text";
// import Album from "./album/index";
import MovieDetails from "./movie_details/index";
import CastList from "./cast_list/index";
import "./styles.scss";

const Movie = ({ movie, actors }) => {
  return (
    <div className="movie-page">
      <Link to="/home" className="go-back go-back-top">
        {/* <IconText icon="icon-left-arrow" text="Back to list" /> */}
      </Link>
      {/* <Album images={movie.images && movie.images.backdrops} /> */}
      <section className="movie-info">
        <Link to="/home" className="go-back go-back-right">
          {/* <IconText icon="icon-left-arrow" text="Back to list" /> */}
        </Link>
        <h1>{movie.title}</h1>
        <article>{movie.overview}</article>
        <MovieDetails movieDetails={movie} />
        <CastList cast={actors.slice(0, 3)} />
      </section>
    </div>
  );
};

// Movie.defaultProps = {
//   movieDetails: {
//     images: {},
//     title: "",
//     genres: [],
//     overview: "",
//     credits: {},
//     vote_average: 0,
//     release_date: "",
//     runtime: 0
//   }
// };

// Movie.propTypes = {
//   movieDetails: movieDetailsType
// };

export default Movie;
