import "./ProjectTeammate.css"

export default function ProjectTeammate({ teammate }) {

    return (
        <div className="teammate-container flex-ctr">

            <img className="proj-mate-img" alt={`Photo of ${teammate.name}`} src={teammate.img} />


            <div className="proj-mate-info">
                <a className="proj-mate-link" href={teammate.github} target="_blank" rel="noreferrer">
                    <p className="bold">{teammate.name} {'\u2197'}</p>
                </a>
                <p>{teammate.role} </p>
            </div>
        </div>
    )
}