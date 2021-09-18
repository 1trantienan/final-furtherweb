import React from "react";
import "./App.css";
import "./css/cases.css";
import HeaderNav from "./components/navbar.jsx";
import HomePage from "./components/HomePage.jsx";
import VaccineInfo from "./components/vaccineData/VaccineInfo";
import CovidInfo from "./components/cases/covidInfo";
import CountryView from "./components/cases/countryView";
import About from "./components/about";
import Login from "./components/Login"
import Footer from "./components/footer.jsx";
import  VaccineCompany from './components/vaccineData/vaccineManufacture.jsx';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import PrivateRoute from "./components/PrivateRoute";
import PageNotFound from "./components/PageNotFound";
import Reset from "./components/Reset";
import Register from "./components/register";



function App() {
  return (
    <div className="App">
      <div className="content-wrap">
        <Router>
         
          <HeaderNav />
          
          <Route path="/Login" component={Login} exact={true} />

          <Switch>
            <Route exact path="/dashboard" component={HomePage}/>
            <Route path="/vaccination" component={VaccineInfo} />
            <Route path="/covidInfo" component={CovidInfo} />
            <Route path="/countryView/:countryName" component={CountryView} />
            <Route path="/about" component={About} />
            <Route path="/vaccineCompany" component={VaccineCompany} />
            <Route path="/reset" component={Reset} />
            <Route path="/register" component={Register} />
            
            <Route component={PageNotFound}/>
          </Switch>
        </Router>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
