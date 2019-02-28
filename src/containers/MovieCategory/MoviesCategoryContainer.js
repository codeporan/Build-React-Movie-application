import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchgenre } from "../../actions/MoviesAction";
import SideBar from "../../components/blocks/Sidebar";
class MovieCategoryContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchgenre());
  }
  render() {
    const { genres } = this.props.movies.genres;
    return (
      <div>
        <SideBar genres={genres} />
      </div>
    );
  }
}
const mapstate = state => ({
  movies: state.movies
});
export default connect(
  mapstate,
  null
)(MovieCategoryContainer);
