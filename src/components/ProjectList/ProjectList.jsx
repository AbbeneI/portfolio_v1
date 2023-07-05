import ProjectItem from '../ProjectItem/ProjectItem';
import "./ProjectList.css";

export default function projectList({ projectData }) {
    // let Projects = [

    // ];
    const projectsList = projectData.map(
        (project, idx) => <ProjectItem project={project} key={idx} />
    )

    return (
        <>
            <h2>Projects</h2>
            <div className="project-list">
                {projectsList}
            </div>
        </>
    )
}