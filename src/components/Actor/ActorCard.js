import React, { Component } from "react";
class Actorlist extends Component {
  render() {
    const { person } = this.props;
    return (
      <div className="row results flex results_profile_card">
        {person.results &&
          person.results.map(item => (
            <div className="col-md-3 fifty_square">
              <div key={item.id} className="item profile card">
                <div className="image_content">
                  <a
                    id={`actors/${item.id}`}
                    className="result"
                    href={`actors/${item.id}`}
                    title={`${item.name}`}
                    alt={`${item.name}`}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${
                        item.profile_path
                      }`}
                    />
                  </a>
                </div>
                <div className="meta">
                  <p className="name">
                    <a href={`actors/${item.id}`}>{item.name}</a>
                  </p>
                  {item.known_for &&
                    item.known_for
                      .slice(0, 1)
                      .map(known => (
                        <p className="sub">{known.original_title}</p>
                      ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}
export default Actorlist;
