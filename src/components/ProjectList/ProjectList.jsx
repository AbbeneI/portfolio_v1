import ProjectItem from '../ProjectItem/ProjectItem.jsx';
import "./ProjectList.css";

export default function projectList({ projectData }) {
    const projectsList = projectData.map(
        (project, idx) => <ProjectItem project={project} idx={idx} key={idx} />
    )

    return (
        <div className="project-list">
            {projectsList}
        </div>
    )
}