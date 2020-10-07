import React from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";


const App = ({filmInfo}) => {
  return (
    <MainPage filmInfo={filmInfo} />
  );
};

App.propTypes = {
  filmInfo: PropTypes.object.isRequired,
};

export default App;
