import './projects.css';
import ProjectList from '../../ProjectList/ProjectList';
import { projects } from '../../../data';

export default function Projects({ }) {
    return (
        <section class="projects">
            <ProjectList projectData={projects} />
        </section>
    )
}