import React, { Component } from "react";
import MovieCardList from "../components/MoviesCardList";
import { connect } from "react-redux";
class HomePage extends Component {
  render() {
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
export default HomePage;
