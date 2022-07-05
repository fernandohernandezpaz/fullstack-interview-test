import {useState, useEffect} from "react";
import {obtenerCommit} from "../services/commits";
import {
    useParams
} from "react-router-dom";

const CommitDetailPage = () => {
    const {hash} = useParams();
    const [commit, setCommit] = useState(null);
    useEffect(() => {
        return () => {
            obtenerCommit(hash)
                .then(response => {
                    const {mensaje, autor, correo, datetime, archivos} = response.data;
                    setCommit(
                        <div className={'col s12'}>
                            <div className="card w-100 mt-2">
                                <div className="card-content">
                                    <p className={'center-align'}>
                                        <i className={'material-icons medium'}>comment</i>
                                    </p>
                                    <p>Hash: {hash}</p>
                                    <p>Realizado el: {datetime}</p>
                                    <p>Por el usuario: {autor}({correo})</p>
                                    <p>Bajo el mensaje: ${mensaje}</p>
                                    <p>Cantidad Archivos: ${archivos.length}</p>
                                </div>
                                <div className="card-action">
                                    <a href="/commits/"  className={'btn text-darken-1'}>Regresar</a>
                                </div>
                            </div>
                        </div>
                    )
                })
                .catch(error => {
                    setCommit(<div className={'col s-12'}>Commit no encontrado</div>)
                });
        }
    }, []);

    return (
        <>
            <div className="row">
                <div className="container">
                    <div className="row">
                        {commit}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommitDetailPage;