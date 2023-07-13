import "./ProjectItem.css";
import ProjectTag from "../ProjectTag/ProjectTag.jsx";
import GitHub from "../Icons/Github.jsx";
import CodePen from "../Icons/Codepen.jsx";
import External from "../Icons/External.jsx";

export default function projectItem({ project, idx }) {
    const projTags = project.tags.map((tag, idx) =>
        <ProjectTag tag={tag} key={idx} />
    );

    const descriptionHTML = { __html: project.description }

    return (

        <div className="proj-item">
            <a className="proj-link">
                <div className="proj-grid">

                    <div className="proj-info">
                        <div className="proj-num">
                            <span className="purple-text">0{idx + 1}</span>
                        </div>
                        <h3>
                            {project.title}
                        </h3>
                        <p className="proj-desc" dangerouslySetInnerHTML={descriptionHTML}>

                        </p>
                        <div className="proj-tags-container">
                            {projTags}
                        </div>
                        <div className="proj-links-container">
                            {project.links.github ? <GitHub link={project.links.github} /> : <></>}
                            {project.links.codepen ? <CodePen link={project.links.codepen} /> : <></>}
                            {project.links.deployed ? <External link={project.links.deployed} /> : <></>}
                        </div>
                    </div>
                    <div className="proj-img">
                        <img src={project.image} />
                    </div>
                </div>
            </a>
        </div>

    )
}

