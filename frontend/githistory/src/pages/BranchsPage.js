import 'materialize-css/dist/js/materialize.min.js'
import {useState, useEffect} from "react";
import {obtenerBranchs} from "../services/branchs";

const BranchsPage = () => {
    const [branchsList, setBrachssList] = useState([]);

    useEffect(() => {
        return () => {
            obtenerBranchs().then(response => {
                setBrachssList(response.data.map((branch, index) => (
                    <tr key={index}>
                        <td>{branch}</td>
                        <td>

                        </td>
                    </tr>
                )))
            });
        }
    }, []);


    return (
        <>
            <div className="row">
                <div className="col s-12">
                    <table className="striped w-100">
                        <thead>
                        <tr>
                            <th>Nombre rama</th>
                            <th>Acciones</th>
                        </tr>
                        </thead>

                        <tbody>
                        {branchsList}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default BranchsPage;