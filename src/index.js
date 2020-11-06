import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import films from "./mocks/films";
import reviews from "./mocks/reviews";

const Films = {
  GRAND_BUDAPEST: {
    name: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseDate: 2014,
  }
};

ReactDOM.render(
    <App
      filmInfo={Films.GRAND_BUDAPEST}
      films={films}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
