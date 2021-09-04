import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="container">
        <div className="row">
          <div className="col ">
            <h4>COVID-19 DASHBOARD</h4>
            <h5 className="list-unstyled">By:</h5>
            <p>
              <b>
                <em>Tran Tien An</em>
              </b>
              <br />
              <b>
                <em>Tran Viet Anh</em>
              </b>
              <b>
                <em>Nguyen Minh Duong</em>
              </b>
              <br />
              <b>
                <em>Alex Shaw</em>
              </b>
              <br />
              <b>
                <em>Do Vu Thanh Vinh</em>
              </b>
              <br />
            </p>

          </div>
          <div className="col ">
            <h4>Powered By</h4>
            <ul className="list-unstyled">
              <li>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  <b>ReactJS</b>
                </a>
              </li>
              <li>
                <a
                  href="https://www.heroku.com/"
                  target="_blank"
                  rel="noreferrer">
                  <b>Bootstrap</b>
                </a>
              </li>
              <li>
                <a
                  href="https://fontawesome.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>Font Awesome</b>
                </a>
              </li>
            </ul>
          </div>

          <div className="col">
            <b>
              <h4>APIs used</h4>
            </b>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://github.com/M-Media-Group/Covid-19-API"
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>Covid-19API</b>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/owid/covid-19-data/tree/master/public/data/vaccinations"
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>VaccineByManufacturerDataset</b>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/govex/COVID-19/tree/master/data_tables/vaccine_data/global_data"
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>VaccineByCountryDataset</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row row1">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} COVID-19 DASHBOARD | All rights
            reserved | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
