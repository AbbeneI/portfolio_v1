import "./ProjectItem.css";
import ProjectTag from "../ProjectTag/ProjectTag";
import GitHub from "../icons/github";
import CodePen from "../icons/codepen";
import ExternalLink from "../icons/external";



export default function projectItem({ project, idx }) {
    const projTags = project.tags.map((tag, idx) =>
        <ProjectTag tag={tag} key={idx} />
    );

    return (
        <div className="proj-item">
            <div className="proj-info">
                <div className="proj-num">
                    <span class="purple-text">0{idx + 1}</span>
                </div>
                <h3>
                    {project.title}
                </h3>
                <p className="proj-desc">
                    {project.description}
                </p>
                <div className="proj-tags-container">
                    {projTags}
                </div>
                <div className="proj-links-container">
                    {project.links.github ? <GitHub link={project.links.github} /> : <></>}
                    {project.links.codepen ? <CodePen link={project.links.codepen} /> : <></>}
                    {project.links.deployed ? <ExternalLink link={project.links.deployed} /> : <></>}

                </div>
            </div>
            <div className="proj-img">

            </div>
        </div>
    )
}

