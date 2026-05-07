import { useParams } from "react-router-dom";

const projectData = {
  calculator: {
    title: "Calculator",
    desc: "A simple calculator using jQuery for DOM manipulation.",
    tech: ["jQuery", "JavaScript"],
    github: "https://github.com/yourusername/calculator",
    demo: "/projects/calculator",
    features: [
      "Basic arithmetic operations",
      "Keyboard input support",
      "Responsive UI",
    ],
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) return <h3>Project not found</h3>;

  return (
    <div className="container py-4">
      <h1>{project.title}</h1>
      <p className="lead">{project.desc}</p>

      <h5>Tech Stack:</h5>
      {project.tech.map((t, i) => (
        <span key={i} className="badge bg-dark me-2">{t}</span>
      ))}

      <h5 className="mt-4">Features:</h5>
      <ul>
        {project.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      <div className="mt-4">
        <a href={project.github} className="btn btn-dark me-2">GitHub</a>
        <a href={project.demo} className="btn btn-primary">Live Demo</a>
      </div>
    </div>
  );
};

export default ProjectDetails;

