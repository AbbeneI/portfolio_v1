import "./ProjectItem.css";
import ProjectTag from "../ProjectTag/ProjectTag.jsx";
import GitHub from "../Icons/Github.jsx";
import CodePen from "../Icons/Codepen.jsx";
import External from "../Icons/External.jsx";
import ProjectTeammate from "../ProjectTeammate/ProjectTeammate";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import fadeIn from "../Animations/FadeIn/FadeIn";

export default function ProjectItem({ project, idx }) {
    const projectRef = useRef();

    const projTags = project.tags.map((tag, idx) =>
        <ProjectTag tag={tag} key={idx} />
    );

    const descriptionHTML = { __html: project.description }
    let team = null;

    if (project.team) {
        team = project.team.map((teammate, idx) => {
            return (<ProjectTeammate teammate={teammate} key={idx} />)
        })
    }


    return (
        <div className={`proj-item ${project.title}`} ref={projectRef}>
            <div className="proj-grid">
                <div className="proj-num">
                    <span className="purple-text">0{idx + 1}</span>
                </div>
                {project.isUpdating ?
                    <div className="proj-update"><p>Update in progress</p> <div class="blinker"></div></div>
                    : <></>}
                <div className="proj-info">

                    <div className="proj-links-container">
                        <h3>
                            {project.title}
                        </h3>
                        {project.links.github ? <a className="proj-link" alt="Link to Github repository" href={project.links.github} target="_blank" rel="noreferrer" aria-label="Link to Github repository"><GitHub /></a> : <></>}
                        {project.links.codepen ? <a className="proj-link" href={project.links.codepen} target="_blank" rel="noreferrer" alt="Link to Codepen" aria-label="Link to Codepen"> <CodePen /></a> : <></>}

                        {project.links.deployed ? <a className="proj-link" alt="Link to the project" aria-label="Link to the project" href={project.links.deployed} target="_blank" rel="noreferrer">{'\u2197'}</a> : <></>}
                    </div>

                    {project.role ? <h4>
                        <span className="purple-text bold">Role:</span><br />{project.role}
                    </h4> : <></>}

                    {project.team ? <div className="proj-team flex-col">{team}</div> : <></>}

                    <p className="proj-desc" dangerouslySetInnerHTML={descriptionHTML} />
                    <div className="proj-tags-container">
                        {projTags}
                    </div>

                </div>
                <div className="proj-img">
                    {/* <img src="" alt={`${project.title} project thumbnail`} /> */}
                </div>
            </div>
        </div >

    )
}

