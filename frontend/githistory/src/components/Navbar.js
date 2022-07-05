import logo from '../logo.svg'
import 'materialize-css/dist/js/materialize.min.js'

const Navbar = (props) => {
    return (
        <>

            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">
                        <img src={logo} className="App-logo" alt="logo" />
                    </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/commits/">Commits</a></li>
                        <li><a href="">Authors</a></li>
                        <li><a href="/branchs/">Branchs</a></li>
                        <li><a href="">Prs</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar