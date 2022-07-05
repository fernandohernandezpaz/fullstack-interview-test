import {useState, useEffect} from "react";
import {obtenerAuthors} from "../services/authors";

const AuthorsPage = () => {
    const [authorsList, setAuthorsList] = useState([]);

    useEffect(() => {
        return () => {
            obtenerAuthors().then(response => {
                setAuthorsList(response.data.map((author, index) => (
                    <tr key={index}>
                        <td>{author.nombre}</td>
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
                            <th>Autor</th>
                        </tr>
                        </thead>

                        <tbody>
                        {authorsList}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default AuthorsPage;