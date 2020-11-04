import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import MainPage from "../main-page/main-page";
import SignInPage from "../sign-in-page/sign-in-page";
import MyListPage from "../my-list-page/my-list-page";
import FilmPage from "../film-page/film-page";
import AddReviewPage from "../add-review-page/add-review-page";
import PlayerPage from "../player-page/player-page";


const App = ({films, reviews}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage films={films} />
        </Route>
        <Route exact path="/login">
          <SignInPage />
        </Route>
        <Route exact path="/mylist">
          <MyListPage />
        </Route>
        <Route exact path="/films/:id">
          <FilmPage film={films[0]} reviews={reviews} />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReviewPage />
        </Route>
        <Route exact path="/player/:id">
          <PlayerPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  filmInfo: PropTypes.object.isRequired,
  films: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
};

export default App;
