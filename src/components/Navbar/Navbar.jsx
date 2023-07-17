import "./Navbar.css"

export default function navbar() {

    return (
        <>
            <nav>
                <div className="logo-container">
                    <a className="logo-link" href="https://ianabbene.com"><img className="logo" alt="logo" src="./images/logo.svg" /></a>
                </div>
                <div className="nav-links-container">
                    <a className="nav-link" href="https://google.com">Home</a>
                    <a className="nav-link" href="https://google.com">Work</a>
                    <a className="nav-link" href="https://google.com">About</a>
                    <a className="nav-link" href="https://google.com">Contact</a>
                </div>
            </nav>

        </>
    )
}