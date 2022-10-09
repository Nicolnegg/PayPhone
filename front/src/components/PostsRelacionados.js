import React, {useEffect, useState} from "react";
import {relatedPosts} from "../api/orders";
import {Table} from "react-bootstrap";
import ModalAnuncio from './ModalAnuncio';

const PostsRelacionados = ({id}) => {

    const[recomendacion, setRecomendacion] = useState([])

    useEffect(() => {
        relatedPosts(id).then(response => {
            setRecomendacion(response);
        })
    }, [])

    if(recomendacion.length === 0){
        return (
            <p className="welcome1">No se encontraron publicaciones relacionadas con este ítem.</p>
        )
    }
    else {
        return (
            <Table hover variant="light">
                <thead>
                <tr className="table-primary welcome">
                    <th colSpan="2" className="text-center">Anuncio</th>
                    <th>Precio</th>
                    <th className="text-center">Descripción</th>
                    <th></th>
                </tr>
                </thead>
                <tbody className="align-middle">
                {
                    recomendacion.map((recomendacion) => (
                        <tr>
                            <td>
                                <svg
                                    className="bd-placeholder-img rounded" width="160" height="90" role="img">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#eee"></rect>
                                    <text x="50%" y="50%" fill="#aaa" dy=".3em">Imagen</text>
                                </svg>
                            </td>
                            <td>
                                {recomendacion.postTitle}
                            </td>
                            <td>
                                ${recomendacion.postPrice}
                            </td>
                            <td>
                                {recomendacion.postDescription}
                            </td>
                            <td>
                                <ModalAnuncio anuncio={recomendacion}/>
                            </td>
                        </tr>))
                }
                </tbody>
            </Table>
        )
    }
}

export default PostsRelacionados