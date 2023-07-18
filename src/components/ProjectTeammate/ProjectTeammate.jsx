import "./ProjectTeammate.css"

export default function ProjectTeammate({ teammate }) {

    return (
        <div className="teammate-container flex-ctr">
            <a className="proj-mate-link" href={teammate.github} target="_blank" rel="noreferrer"><img className="proj-mate-img" alt={`Photo of ${teammate.name}`} src={teammate.img} /></a>

            <div className="proj-mate-info">
                <p>{teammate.name}</p>
                <p>{teammate.role}</p>
            </div>
        </div>
    )
}