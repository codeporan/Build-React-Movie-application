import React from "react";

import { imgSrc } from "../../utils/utils";
import "./styles.scss";

const actorRow = actor => (
  <div key={actor.id} className="cast-row">
    <img
      src={imgSrc(actor.profile_path, 92, "avatar")}
      alt={actor.name}
      className="actor-img"
    />
    <div>{actor.name}</div>
    <div>As...</div>
    <div className="bold-white-text">{actor.character}</div>
  </div>
);

const CastList = ({ cast }) => {
  // console.log(cast);
  return (
    <section className="cast-list">
      {cast.map(actor => {
        return actorRow(actor);
      })}
    </section>
  );
};

export default CastList;
