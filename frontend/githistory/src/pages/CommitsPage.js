import {useState, useEffect} from "react";
import {obtenerCommits} from "../services/commits";

const CommitsPage = () => {
    const [commitsList, setCommitsList] = useState([]);

    useEffect(() => {
        return () => {
            obtenerCommits().then(response => {
                setCommitsList(response.data.map((commit, index) => (
                    <tr key={index}>
                        <td>{commit.autor}</td>
                        <td>{commit.correo}</td>
                        <td>{commit.mensaje_commit}</td>
                        <td>
                            <a
                                href={`/commits/${commit.hash}/`}
                                className="btn"  title="Ver detalle"
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
                <div className="col s-12">
                    <table className="striped w-100">
                        <thead>
                        <tr>
                            <th>Autor</th>
                            <th>Correo</th>
                            <th>Mensaje del commit</th>
                            <th>Acciones</th>
                        </tr>
                        </thead>

                        <tbody>
                        {commitsList}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default CommitsPage;