import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardImg, CardTitle, CardSubtitle, CardBody } from "reactstrap";
import MovieCardList from "../components/MoviesCardList";
import {
  getActorCreditMovies,
  getPeopleProfile
} from "../actions/Actoractions";
class ActorPage extends Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(getPeopleProfile(id));
    this.props.dispatch(getActorCreditMovies(id));
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.getPeopleProfile(this.props.match.params.id);
    }
  }
  render() {
    console.log(this.props.actor);
    const { actorsProfiles, movies } = this.props.actor;
    return (
      <div className="row">
        <div className="col-md-3">
          <Card
            style={{ backgroundColor: "transparent", border: "none" }}
            className="actor-card"
          >
            <CardImg
              top
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${
                actorsProfiles.profile_path
              }`}
              alt={actorsProfiles.name}
              className="actor-card__face--page"
            />
            <CardBody className="actor-card__body">
              <CardTitle className="h6 actor-card__name">
                <Link to={`/actors/${actorsProfiles.id}`}>
                  {actorsProfiles.name}
                </Link>
              </CardTitle>
              <CardSubtitle className="h6 actor-card__info">
                <strong>Birth day:</strong> {actorsProfiles.birthday}
              </CardSubtitle>
              <CardSubtitle className="h6 actor-card__info">
                <strong>Place of birth:</strong>
                {actorsProfiles.place_of_birth}
              </CardSubtitle>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-9 actor-page-info">
          <h4 className="actor-page-info__title">Biography:</h4>
          <p className="actor-page-info__content">{actorsProfiles.biography}</p>
        </div>
        <div className="col-md-12 movies-list">
          <h1 className="text-center h3 movies-list__title">Movies</h1>
          <MovieCardList
            movies={movies.cast}
            hideOverview={true}
            itemsPerRow={4}
          />
        </div>
      </div>
    );
  }
}
const mapstate = state => ({
  actor: state.actor
});
export default connect(mapstate)(ActorPage);
