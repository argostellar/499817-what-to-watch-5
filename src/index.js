import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

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
    />,
    document.querySelector(`#root`)
);
