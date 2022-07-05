import {useState, useEffect} from "react";
import {obtenerBranchs} from "../services/branchs";

const BranchsPage = () => {
    const [branchsList, setBranchsList] = useState([]);

    useEffect(() => {
        return () => {
            obtenerBranchs().then(response => {
                setBranchsList(response.data.map((branch, index) => (
                    <tr key={index}>
                        <td>{branch}</td>
                        <td>
                            <a
                                href={`/branchs/${branch}/`}
                                className="btn" title="Ver detalle"
                            >
                                <i className="material-icons">remove_red_eye</i>
                            </a>
                        </td>
                    </tr>
                )))
            });
        }
    }, []);


    return (
        <>
            <div className="row">
                <div className="col-12">
                    <table className="table table-striped w-100">
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