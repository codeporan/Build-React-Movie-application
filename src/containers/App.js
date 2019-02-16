import React from "react";
import { Switch, Route } from "react-router-dom";
import MoviesCategoryContainer from "./MovieCategoryContainer";
import MoviePage from "./MoviePage";
import HomePage from "./HomePage";
import NowPlayingPage from "./NowPlaying";
import TopRatedPage from "./TopRatedPage";
import UpcomingPage from "./UpcomingPage";
import GenrePage from "./GenrePage";
import ActorPage from "./ActorPage";
import Header from "../components/blocks/Header";
const App = () => (
  <div>
    <Header />
    <div className="container-fuild">
      <div className="row">
        <div className="col-6 col-lg-2 col-md-2 sidebar-offcanvas" id="sidebar">
          <MoviesCategoryContainer />
        </div>
        <div className="col-12 col-md-10 col-lg-10">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/upcoming" component={UpcomingPage} />
            <Route exact path="/now" component={NowPlayingPage} />
            <Route exact path="/top_rated" component={TopRatedPage} />
            <Route exact path="/genres/:id/:genre" component={GenrePage} />
            <Route exact path="/movies/:id" component={MoviePage} />
            <Route exact path="/actors/:id" component={ActorPage} />
          </Switch>
        </div>
      </div>
    </div>
  </div>
);
export default App;
