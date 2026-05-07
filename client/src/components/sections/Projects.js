import { Link } from 'react-router-dom';


const projects = [
  { title: "Calculator", path: "/projects/calculator", desc: "A basic calculator (jQuery events, DOM manipulation)" },
  { title: "Image Slider", path: "/projects/slider", desc: "Automatic & manual image slider" },
  { title: "Tic-Tac-Toe", path: "/projects/tictactoe", desc: "Classic game with game logic" },
  { title: "To-Do List", path: "/projects/todo", desc: "Add, delete, mark tasks" },
  { title: "Follow Spot", path: "/projects/followspot", desc: "Mouse-follow spotlight (jQuery)" },
  { title: "Image Magnifier", path: "/projects/magnifier", desc: "Lens zoom on hover" },
  { title: "Responsive Gallery", path: "/projects/gallery", desc: "Filterable image gallery" },
  { title: "Simple Map", path: "/projects/map", desc: "Embedded interactive map" },
];

const Projects = () => (
  <div>
    <div className="page-header">
      <h2>Projects <span className="badge bg-secondary">8 demos</span></h2>
    </div>
    <div className="row">
      {projects.map((proj, idx) => (
        <div className="col-md-4 mb-4" key={idx}>
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">{proj.title}</h5>
              <p className="card-text">{proj.desc}</p>
              <Link
                to={proj.path}
                className="btn btn-primary"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title={`Open ${proj.title} Demo`}
              >
                Open Demo
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
    
  </div>
);
export default Projects;

