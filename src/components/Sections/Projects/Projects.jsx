import './Projects.css';
import ProjectList from '../../ProjectList/ProjectList';
import { projects } from '../../../data.js';

export default function Projects({ }) {
    return (
        <section className="projects">
            <h2 className="section-title">Work</h2>
            <ProjectList projectData={projects} />
        </section>
    )
}