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

        <div className="proj-item grey-bg">
            <div className="proj-grid">

                <div className="proj-info">
                    <div className="proj-num">
                        <span className="purple-text">0{idx + 1}</span>
                    </div>
                    <h3>
                        {project.title}
                    </h3>
                    <div className="proj-team">

                    </div>
                    <p className="proj-desc" dangerouslySetInnerHTML={descriptionHTML}></p>
                    <div className="proj-tags-container">
                        {projTags}
                    </div>
                    <div className="proj-links-container">
                        {project.links.github ? <a className="proj-link" href={project.links.github} target="
                        _blank"><GitHub /></a> : <></>}
                        {project.links.codepen ? <a className="proj-link" href={project.links.codepen} target="
                        _blank"> <CodePen /></a> : <></>}
                        {project.links.deployed ? <a className="proj-link" href={project.links.deployed} target="
                        _blank"><External /></a> : <></>}
                    </div>
                </div>
                <div className="proj-img">
                    <img src={project.image} />
                </div>
            </div>
        </div >

    )
}

