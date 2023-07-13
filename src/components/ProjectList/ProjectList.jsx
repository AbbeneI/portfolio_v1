import ProjectItem from '../ProjectItem/ProjectItem';
import "./ProjectList.css";

export default function projectList({ projectData }) {
    // let Projects = [

    // ];
    const projectsList = projectData.map(
        (project, idx) => <ProjectItem project={project} idx={idx} key={idx} />
    )

    return (

        <div className="project-list">
            {projectsList}
        </div>

    )
}