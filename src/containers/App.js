import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MoviePage from "./MoviePage/MoviePage";
import HomePage from "./HomePage/HomePage";
import NowPlayingPage from "./NowPlaying/NowPlaying";
import TopRatedPage from "./TopRatedPage/TopRatedPage";
import UpcomingPage from "./Upcoming/UpcomingPage";
import GenrePage from "./GenrePage/GenrePage";
import ActorPage from "./ActorPage/ActorPage";
import Header from "../components/blocks/Header";
import ActorList from "./ActorPage/personlist";
import Discover from "./Discover/Discover";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div>
            <Header />
          </div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/discover" component={Discover} />
            <Route exact path="/actorlist" component={ActorList} />
            <Route exact path="/upcoming" component={UpcomingPage} />
            <Route exact path="/now" component={NowPlayingPage} />
            <Route exact path="/top_rated" component={TopRatedPage} />
            <Route exact path="/genres/:id/:genre" component={GenrePage} />
            <Route exact path="/movies/:id" component={MoviePage} />
            <Route exact path="/actors/:id" component={ActorPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// import React from "react";
// import { Switch, Route } from "react-router-dom";
// import MoviesCategoryContainer from "./MovieCategoryContainer";
// import MoviePage from "./MoviePage";
// import HomePage from "./HomePage";
// import NowPlayingPage from "./NowPlaying";
// import TopRatedPage from "./TopRatedPage";
// import UpcomingPage from "./UpcomingPage";
// import GenrePage from "./GenrePage";
// import ActorPage from "./ActorPage";
// import Header from "../components/blocks/Header";
// import SearchBar from "../components/SearchBar";
// import Actor from "../components/Actor";
// import ActorList from "./personlist";

// const App = () => (
//   <div>
//     <Header />
//     {/* <SearchBar /> */}
//     <div className="container-fuild">
//       <div className="row">
//         {/* <div className="col-6 col-lg-2 col-md-2 sidebar-offcanvas" id="sidebar">
//           <MoviesCategoryContainer />
//         </div> */}
//         <div className="col-md-12">
//           <Switch>
//             <Route exact path="/" component={HomePage} />
//             <Route exact path="/actorlist" component={ActorList} />
//             <Route exact path="/upcoming" component={UpcomingPage} />
//             <Route exact path="/now" component={NowPlayingPage} />
//             <Route exact path="/top_rated" component={TopRatedPage} />
//             {/* <Route exact path="/genres/:id/movie" component={MoviePage} /> */}
//             <Route exact path="/genres/:id/:genre" component={GenrePage} />
//             <Route exact path="/movies/:id" component={MoviePage} />
//             <Route exact path="/actors/:id" component={ActorPage} />
//           </Switch>
//         </div>
//       </div>
//     </div>
//   </div>
// );
// export default App;
