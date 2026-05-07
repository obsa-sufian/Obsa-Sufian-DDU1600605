import { Link } from 'react-router-dom';
//import ProjectDetails from '../projects/ProjectDetails';
import logo from '../../images/obsa-photo.png';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-left">
          <p className="intro">Welcome to my portfolio</p>
          <h1 className="title">Hi, I'm Obsa<span className="cursor">|</span></h1>
          <p className="description">
            I build full-stack applications using React, Node.js, and MySQL.
            I care about performance, clean code, and actually finishing projects.
          </p>
          <div className="buttons">
            <Link to="/projects" className="btn primary">
              View Projects
            </Link>
            <Link to="/contact" className="btn outline">
              Contact Me
            </Link>
          </div>
        </div>

        <div className="home-right">
          <img src={logo} alt="Obsa" />
        </div>
      </div>

      <div className="container mt-5 mb-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h4 className="card-title"> Modern UI</h4>
                <p className="card-text">
                  Clean, responsive interfaces using Bootstrap and React.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h4 className="card-title"> Interactivity</h4>
                <p className="card-text">
                  Dynamic apps with React, AJAX, and real-time updates.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h4 className="card-title"> Full Stack</h4>
                <p className="card-text">
                  REST APIs, authentication, and databases with Node & MySQL.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div className="container mb-5">
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0 contact-card">
            <div className="card-body">
              <h4 className="card-title">Connect with me</h4>
              <ul className="social-list">
                <li><a href="https://github.com/Obsa-sufian" target="_blank" rel="noreferrer">GitHub: Obsa-sufian</a></li>
                <li><a href="https://www.linkedin.com/in/obsa-sufian" target="_blank" rel="noreferrer">LinkedIn: Obsa Sufian</a></li>
                <li><a href="mailto:ObsaSufian159@gmail.com">Gmail: ObsaSufian159@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0 contact-card">
            <div className="card-body">
              <h4 className="card-title">Previous work</h4>
              <ul className="project-list">
                <li><a href="https://github.com/Obsa-sufian/food-ordering-system" target="_blank" rel="noreferrer">Food Ordering System <span className="project-meta">(C++)</span></a></li>
                <li><a href="https://github.com/obsa-sufian/Pharmacy-Management-System" target="_blank" rel="noreferrer">Pharmacy Management System <span className="project-meta">(Java)</span></a></li>
                <li><a href="https://github.com/obsa-sufian/Bank-Management-System" target="_blank" rel="noreferrer">Bank Management System <span className="project-meta">(Java)</span></a></li>
                <li><a href="https://github.com/obsa-sufian/JavaBank" target="_blank" rel="noreferrer">Alarm Clock Application <span className="project-meta">(Java)</span></a></li>
                <li><a href="https://github.com/obsa-sufian/Client-Server-Chat-App" target="_blank" rel="noreferrer">Client &amp; Server Chat App <span className="project-meta">(Java)</span></a></li>
                <li><a href="https://github.com/obsa-sufian/Pharmacy-Management-System" target="_blank" rel="noreferrer">Pharmacy Management System <span className="project-meta">(HTML5, CSS, JS)</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default Home;