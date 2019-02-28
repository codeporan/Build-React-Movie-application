import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardImg, CardTitle, CardSubtitle, CardBody } from "reactstrap";
import MovieCardList from "../../components/MoviesCardList";
import {
  getActorCreditMovies,
  getPeopleProfile,
  getPeople
} from "../../actions/Actoractions";
class ActorPage extends Component {
  componentDidMount() {
    this.props.dispatch(getPeople());
  }
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
    const { actorsProfiles, movies } = this.props.actor;
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="actor-iamge">
            <img
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${
                actorsProfiles.profile_path
              }`}
              alt={actorsProfiles.id}
              // className="actor-card__face--page"
            />
          </div>
          <div className="grey_columns">
            <div id="left_column" className="column left_column">
              <section className="fact left_column">
                <h3 className="space">
                  <bdi>Personal Info</bdi>
                </h3>
                <p>
                  <strong>
                    <bdi>Known For</bdi>
                  </strong>
                  {actorsProfiles.known_for_department}
                </p>
                <p>
                  <strong>
                    <bdi>Gender</bdi>
                  </strong>{" "}
                  {actorsProfiles.gender === 1 ? "Female" : "male"}
                </p>
                <p>
                  <strong>
                    <bdi>Known Credits</bdi>
                  </strong>
                  {Math.round(actorsProfiles.popularity)}
                </p>
                <p>
                  <strong>
                    <bdi>Birthday</bdi>
                  </strong>{" "}
                  {actorsProfiles.birthday}
                </p>

                <p>
                  <strong>
                    <bdi>Place of Birth</bdi>
                  </strong>{" "}
                  {actorsProfiles.place_of_birth}
                </p>

                <p>
                  <strong>
                    <bdi>Official Site</bdi>
                  </strong>
                  -
                </p>
                <p className="no_pad">
                  <strong>
                    <bdi>Also Known As</bdi>
                  </strong>
                </p>
                <ul>
                  {actorsProfiles.also_known_as &&
                    actorsProfiles.also_known_as.map(known => (
                      <li key={known} className="additionalName">
                        {known}
                      </li>
                    ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="left-column">
            <div className="Headertitle">
              <div className="actortitle">
                <a href={`/person/${actorsProfiles.id}`}>
                  <h2>{actorsProfiles.name}</h2>
                </a>
                <h3 className="bio">Biography</h3>
              </div>
            </div>
            <div className="overview">{actorsProfiles.biography}</div>
            <div className=" movies-list">
              <h1 className="movie-know">Known for</h1>
              <MovieCardList
                movies={movies.cast}
                hideOverview={true}
                itemsPerRow={4}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapstate = state => ({
  actor: state.actor
});
export default connect(mapstate)(ActorPage);

{
  /* <div class="bg_image">
  <div class="bg_filter">
    <div class="single_column medium">


      <section class="images inner">
        <div class="poster profile">
          <div class="image_content">


      <img class="poster" src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/bwY3wWrpG3YqIWiwFbHkN3zSUEk.jpg" srcset="https://image.tmdb.org/t/p/w300_and_h450_bestv2/bwY3wWrpG3YqIWiwFbHkN3zSUEk.jpg 1x, https://image.tmdb.org/t/p/w600_and_h900_bestv2/bwY3wWrpG3YqIWiwFbHkN3zSUEk.jpg 2x" alt="Rosa Salazar">



          </div>

            <div class="zoom">
              <a href="#"><span class="glyphicons glyphicons-zoom-in x1"></span> Expand</a>
            </div>

        </div>

        <section id="section_header" class="header no_image profile ">
  <div class="title" dir="auto">
    <a href="/person/973667-rosa-salazar">
      <h2>Rosa Salazar</h2>
    </a>

    <span class="social_links">


        <a class="social_link" href="https://twitter.com/rosa_salazar" target="_blank" rel="noopener"><span class="social social-twitter"></span></a>


    </span>
  </div>

  <h3 dir="auto">Biography</h3>
  <div dir="auto" class="biography true">

      <div class="content fade_text">
        <div class="text" style="overflow-wrap: break-word;"><p>Rosa Bianca Salazar (born July 16, 1985) is an American actress. She was raised in Greenbelt, Maryland. She began performing in New York City and moved to Los Angeles, California in 2009 to pursue acting. She appeared in several CollegeHumor sketches. She is best known for her roles as Zoe DeHaven on the NBC series Parenthood, and Nurse Maria in the FX anthology series American Horror Story: Murder House. She appeared in the 2015 films The Divergent Series: Insurgent, as Lynn, and Maze Runner: The Scorch Trials, as Brenda.</p><div class="read_more ddd-keep"><a class="read_more no_click" href="#"><img width="8" height="12" src="/assets/2/v4/bible/left_arrow-5438000ff3725f3dedd7ea4f69efeb3e16b7ee149c25a47bc89467b813a2bc90.svg"></a></div></div>
      </div>

  </div>

  <div dir="auto" id="biography_window" class="hide">
    <p>Rosa Bianca Salazar (born July 16, 1985) is an American actress. She was raised in Greenbelt, Maryland. She began performing in New York City and moved to Los Angeles, California in 2009 to pursue acting. She appeared in several CollegeHumor sketches. She is best known for her roles as Zoe DeHaven on the NBC series Parenthood, and Nurse Maria in the FX anthology series American Horror Story: Murder House. She appeared in the 2015 films The Divergent Series: Insurgent, as Lynn, and Maze Runner: The Scorch Trials, as Brenda.</p>

  </div>


  <div class="content_wrapper full_width bottom_border">
    <ul class="shortcut_bar">

    <li data-sub-menu="sub_menu_discussions" class="no_hover" style="z-index: 2;"><a class="no_click" href="/person/973667-rosa-salazar/discuss" title="Discussions">Discussions</a> <span class="k-icon k-i-arrow-60-down"></span></li>
    <li class="" style="z-index: 3;"><a href="/person/973667-rosa-salazar/images/profiles" title="Images">Images</a></li>
    <li class="" style="z-index: 4;"><a href="/person/973667-rosa-salazar/changes" title="Changes">Changes</a></li>
    <li style="z-index: 5;"><a class="no_click report" window="person" href="#" title="Report">Report</a></li>
    <li style="z-index: 6;"><a id="share" class="no_click" href="#" title="Share">Share</a></li>

        <li style="z-index: 7;"><a class="keyboard_s edit_page" href="/person/973667-rosa-salazar/edit?active_nav_item=primary_facts" title="Edit">Edit</a></li>


</ul>
<div id="sub_menu_discussions" class="inner_sub_menu" style="z-index: 2; top: 0px; left: 416.5px; min-width: 114px;">
  <ul>
    <li class="primary" style="height: 58px;"><a href="/person/973667-rosa-salazar/discuss" title="Discussions">Discussions</a></li>
    <li><a href="/person/973667-rosa-salazar/discuss/category/5047951f760ee3318900009a">General <span>1</span></a></li>
    <li><a href="/person/973667-rosa-salazar/discuss/category/504794a319c29527aa000640">Content Issues <span>0</span></a></li>
  </ul>
</div>
  </div>
</section>
      </section>
    </div>
  </div>
</div> */
}
