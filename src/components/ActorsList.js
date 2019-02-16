import React, { Component } from "react";
import ActorCard from "./ActorCard";
class ActorsList extends Component {
  render() {
    const { actors } = this.props;
    return (
      <div className="row">
        {actors.map(actor => (
          <div className="col" key={actor.id}>
            <ActorCard actor={actor} />
          </div>
        ))}
      </div>
    );
  }
}
export default ActorsList;
