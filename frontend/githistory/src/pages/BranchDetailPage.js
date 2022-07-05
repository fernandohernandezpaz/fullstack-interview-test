import React from 'react'
import 'bootstrap/dist/js/bootstrap.min.js'
import {useState, useEffect} from "react";
import {obtenerBranch} from "../services/branchs";
import {
    useParams
} from "react-router-dom";

const CommitDetailPage = () => {
    const {name} = useParams();
    const [branch, setBranch] = useState(null);

    useEffect(() => {
        return () => {
            obtenerBranch(name)
                .then(response => {
                    const {nombre, commits} = response.data;
                    setBranch(
                        <div className={'col-8 mx-auto mt-2'}>
                            <div className="card w-100">
                                <div className="card-body">
                                    <p className={'text-center'}>
                                        <i className={'material-icons medium-size-icon'}>local_offer</i>
                                    </p>
                                    <p>Rama: {nombre}</p>
                                    <p>Cantidad de commits realizados: {commits.length}</p>
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                                <button className="accordion-button" type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#panelsStayOpen-collapseOne"
                                                        aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                    <i className={'material-icons'}>comment</i> Commits
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseOne"
                                                 className="accordion-collapse collapse"
                                                 aria-labelledby="panelsStayOpen-headingOne">
                                                <div className="accordion-body">
                                                    {commits.map((commit, indexCard) => (
                                                        <>
                                                            <div className="card mt-1" key={`${indexCard}Card`}>
                                                                <div className="card-header">
                                                                    <strong>Commit {indexCard + 1}: {commit.mensaje}</strong>
                                                                </div>
                                                                <div className="card-body">
                                                                    <p><strong>Autor:</strong> {commit.autor}</p>
                                                                    <p><strong>Correo:</strong> {commit.correo}</p>
                                                                    <p><strong>Realizado:</strong> {commit.datetime}</p>
                                                                    <span>Archivos</span>
                                                                    <ul>
                                                                        {
                                                                            Object.keys(commit.archivos).map((archivo, indexLi) =>
                                                                                <li key={indexLi}>
                                                                                    {archivo}
                                                                                </li>
                                                                            )
                                                                        }
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <a href="/branchs/" className={'btn btn-link'}>Regresar</a>
                                </div>
                            </div>
                        </div>
                    )

                })
                .catch(error => {
                    setBranch(
                        // <div className={'col s-12'}>Commit no encontrado</div>
                    )
                });
        }
    }, []);

    return (
        <>
            <div className="row">
                <div className="container">
                    <div className="row">
                        {branch}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommitDetailPage;