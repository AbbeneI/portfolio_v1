import "./ProjectItem.css";
import ProjectTag from "../ProjectTag/ProjectTag.jsx";
import GitHub from "../Icons/Github.jsx";
import CodePen from "../Icons/Codepen.jsx";
import External from "../Icons/External.jsx";
import ProjectTeammate from "../ProjectTeammate/ProjectTeammate";

export default function projectItem({ project, idx }) {
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
        <div className={`proj-item ${project.title}`}>
            <a className="proj-link-none" href={project.links.deployed} target="_blank" rel="noreferrer">
                <div className="proj-grid">
                    <div className="proj-info">
                        <div className="proj-num">
                            <span className="purple-text">0{idx + 1}</span>
                        </div>
                        <div className="proj-links-container">
                            <h3>
                                {project.title}
                            </h3>
                            {project.links.github ? <a className="proj-link" href={project.links.github} target="_blank" rel="noreferrer"><GitHub /></a> : <></>}

                            {project.links.codepen ? <a className="proj-link" href={project.links.codepen} target="_blank" rel="noreferrer"> <CodePen /></a> : <></>}


                            <a className="proj-link ext" href={project.links.deployed} target="_blank" rel="noreferrer">{'\u2197'}</a>
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
            </a>
        </div >

    )
}

