import React from "react";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="info">
      <h1 className="display-4">COVID-19 Statistics</h1>
      <p className="lead">
        This application is a statistical dashboard in which we show data/statistics on COVID-19
        cases by country and continent in a variety of forms (graphs and tables). Additionally,
        the application provides statistical analysis and information on the various vaccinations
        available in each country, as well as the country's vaccination status.
      </p>
      <hr className="my-4" />
      <p>
        <b>COVID-19 Info: </b>Global and country-level format of COVID-19 data
      </p>
      <p>
        <b>Vaccination:</b> Country vaccine statistics and manufacturer vaccine information
      </p>
    </div>


  );
};

export default HomePage;
