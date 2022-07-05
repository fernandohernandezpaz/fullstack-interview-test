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