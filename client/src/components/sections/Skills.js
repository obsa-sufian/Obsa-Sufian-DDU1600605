import { useEffect, useState } from 'react';

const skills = [
  { name: 'HTML5', level: 95 },
  { name: 'CSS3 / Bootstrap', level: 90 },
  { name: 'JavaScript / jQuery', level: 85 },
  { name: 'React.js', level: 80 },
  { name: 'Node.js / Express', level: 75 },
  { name: 'MySQL', level: 70 },
];

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(t => new window.bootstrap.Tooltip(t));
  }, []);

  return (
    <div>
      <div className="page-header">
        <h2>My Skills</h2>
      </div>
      <div className="mt-4">
        {skills.map((skill, idx) => (
          <div className="mb-3" key={idx}>
            <div className="d-flex justify-content-between">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="progress" style={{ height: '20px' }}>
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                style={{ width: animate ? `${skill.level}%` : '0%', transition: 'width 1.5s ease' }}
                aria-valuenow={skill.level}
                aria-valuemin="0"
                aria-valuemax="100"
                data-bs-toggle="tooltip"
                title={`${skill.level}% proficiency`}
              >
                {animate ? `${skill.level}%` : ''}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;

