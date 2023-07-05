import "./ProjectItem.css";

export default function projectItem({ project }) {
    return (
        <div className="proj-item">
            <div className="proj-info">
                <div className="proj-num">
                    01
                </div>
                <h3>
                    {project.title}
                </h3>
                <p className="proj-desc">
                    {project.description}
                </p>
                <div className="proj-tags-container">
                    {project.tags}
                </div>
                <div className="proj-links-container">
                </div>
            </div>
            <div className="proj-img">

            </div>
        </div>
    )
}