import 'materialize-css/dist/js/materialize.min.js'
import Navbar from "./Navbar";

const MainLayout = (props) => {
    return (
        <>
            <Navbar></Navbar>

            <div className="container-fluid">
                {props.children}
            </div>
        </>
    )
}

export default MainLayout