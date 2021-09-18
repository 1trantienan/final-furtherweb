import React from "react";
import "./App.css";
import "./css/cases.css";
import HeaderNav from "./components/navbar.jsx";
import HomePage from "./components/HomePage.jsx";
import VaccineInfo from "./components/vaccineData/VaccineInfo";
import CovidInfo from "./components/cases/covidInfo";
import CountryView from "./components/cases/countryView";
import About from "./components/about";
import Login from "./components/Login";
import register from "./components/register";
import Reset from "./components/Reset";
import Footer from "./components/footer.jsx";
import  VaccineCompany from './components/vaccineData/vaccineManufacture.jsx';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import {ProtectedRoute} from "./components/PrivateRoute";
import {AuthProvider} from "./components/auth";


function App() {
  return (
    <div className="App">
      <div className="content-wrap">
<<<<<<< Updated upstream
=======
        
        <AuthProvider>
>>>>>>> Stashed changes
        <Router>
          <HeaderNav />
          
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={register} />
            <ProtectedRoute Redirect to="/dashboard " path="/login">
              <Route exact path="/dashboard" component={HomePage} />
              <Route exact path="/vaccination" component={VaccineInfo} />            
              <Route exact path="/covidInfo" component={CovidInfo} />
              <Route exact path="/countryView/:countryName" component={CountryView} />
              <Route exact path="/about" component={About} />
              <Route exact path="/vaccineCompany" component={VaccineCompany} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/reset" component={Reset} />
            </ProtectedRoute>
          </Switch>
        </Router>
        </AuthProvider>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
