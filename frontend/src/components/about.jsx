
import pic1 from "../components/images/pic1.jpg";
import pic2 from "../components/images/pic2.jpg";
import pic3 from "../components/images/pic3.jpg";
import pic4 from "../components/images/pic4.jpg";
import pic5 from "../components/images/pic5.jpg";


export default function About() {
  return (
    <div className="about-body" role="contentinfo">
      <div className="aboutCard about">
        <img src={pic1} alt="shwetha-Avatar" className="aboutImg"  />
        <div className="aboutContainer">
          <h4 className="about-name">
            <b>Tran Tien An</b>
          </h4>
          <p className="about-task">
            Task: Cases Status (global View and Country View) and Home page
          </p>
          <a
            href="https://github.com/1trantienan"
            className="about-gitrepo-link"
          >
            GitHub{" "}
            <span className="gitExternalLinkIcon">
              <i className="fas fa-external-link-alt gitExternalLink"></i>
            </span>
          </a>
        </div>
      </div>
      <div className="aboutCard about">
        <img src={pic2} alt="vandana-Avatar" className="aboutImg" />
        <div className="aboutContainer">
          <h4 className="about-name">
            <b>Nguyen Minh Duong</b>
          </h4>
          <p className="about-task">
            Task: VaccinationInfo, Vaccine Manufacture and About Page
          </p>
          <a
            href="/"
            className="about-gitrepo-link"
          >
            GitHub
            <span className="gitExternalLinkIcon">
              <i className="fas fa-external-link-alt gitExternalLink"></i>
            </span>
          </a>
        </div>
      </div>
      <div className="aboutCard about">
        <img src={pic3} alt="vandana-Avatar" className="aboutImg" />
        <div className="aboutContainer">
          <h4 className="about-name">
            <b>Tran Viet Anh</b>
          </h4>
          <p className="about-task">
            Task: Backend, and Deployment of the Project
          </p>
          <a
            href="/"
            className="about-gitrepo-link"
          >
            GitHub
            <span className="gitExternalLinkIcon">
              <i className="fas fa-external-link-alt gitExternalLink"></i>
            </span>
          </a>
        </div>
      </div>
      <div className="aboutCard about">
        <img src={pic4} alt="vandana-Avatar" className="aboutImg" />
        <div className="aboutContainer">
          <h4 className="about-name">
            <b>Alexander Joseph Shaw</b>
          </h4>
          <p className="about-task">
            Task: Frontend Login Page
          </p>
          <a
            href="/"
            className="about-gitrepo-link"
          >
            GitHub
            <span className="gitExternalLinkIcon">
              <i className="fas fa-external-link-alt gitExternalLink"></i>
            </span>
          </a>
        </div>
      </div>
      <div className="aboutCard about">
        <img src={pic5} alt="vandana-Avatar" className="aboutImg" />
        <div className="aboutContainer">
          <h4 className="about-name">
            <b>Do Vu Thanh Vinh</b>
          </h4>
          <p className="about-task">
            Task: Backend Login Page
          </p>
          <a
            href="/"
            className="about-gitrepo-link"
          >
            GitHub
            <span className="gitExternalLinkIcon">
              <i className="fas fa-external-link-alt gitExternalLink"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
