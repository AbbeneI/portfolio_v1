import './Projects.css';
import ProjectList from '../../ProjectList/ProjectList';
import { projects } from '../../../data';

export default function Projects({ }) {
    return (
        <section className="projects">
            <ProjectList projectData={projects} />
        </section>
    )
}