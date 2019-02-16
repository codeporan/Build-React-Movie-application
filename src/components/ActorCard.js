import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Card, CardImg, CardTitle, CardSubtitle, CardBody } from "reactstrap";

class ActorCard extends Component {
  render() {
    const { actor } = this.props;
    return (
      <Card className="actor-card">
        <CardImg
          top
          width="100%"
          src={`https://image.tmdb.org/t/p/w276_and_h350_face${
            actor.profile_path
          }`}
          alt={actor.name}
          className="actor-card__face"
        />
        <CardBody className="actor-card_name">
          <CardTitle className="h6 actor-card_name">
            <Link to={`/actors/${actor.id}`}>{actor.name}</Link>
          </CardTitle>
        </CardBody>
      </Card>
    );
  }
}
export default ActorCard;
