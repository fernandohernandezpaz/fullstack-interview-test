import logo from '../logo.svg'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} className="App-logo" alt="logo"/>
                    </a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/commits/">Commits</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Authors</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/branchs/">Branchs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Prs</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar