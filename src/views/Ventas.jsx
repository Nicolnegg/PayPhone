import {React,useEffect, useState} from 'react'
import jwtDecode from "jwt-decode";
import {getAccessToken} from "../api/auth";
import Table from "react-bootstrap/Table";
import { traerMisAnuncios, traerVentas } from '../api/ventas';

const Ventas = () => {
    const UserId = jwtDecode(getAccessToken()).sub.id;
    const[misAnuncios, setMisAnuncios] = useState([])
    const[ventas, setVentas] = useState([])

    useEffect(() => {
        traerVentas(UserId).then(response => {
            setVentas(response);
        })
    }, [UserId])

    useEffect(() => {
        traerMisAnuncios(UserId).then(response => {
            setMisAnuncios(response);
        })
    }, [UserId])

    
    const fecha = (date) => {
        return(date.toLocaleDateString('es-ES', {year: 'numeric', month: 'long', day: 'numeric'
        ,weekday:'long', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'shortGeneric'}))
    }

    return (
      <div className="col contenedorPerfil d-flex">
          <div className="row container rounded w-100">
              <h5 className="text-center welcome2 rounded-pill mb-3 fw-bold">Estos son
              los productos y servicios que has publicado:</h5>
          {
              misAnuncios.map((misAnuncios, index)=>(
                  <div>
                      <p className="text-center fw-bold w-100 badge">Anuncio # {index+1}</p>
                      <div className="d-flex w-100">
                          <p><b>Fecha de publicación: </b>{fecha(new Date(misAnuncios.createdAt))}</p>
                      </div>
                      <Table hover>
                          <thead>
                          <tr className="table-primary welcome">
                              <th className="text-center" colSpan="2">Producto o Servicio publicado</th>
                              <th>Descripción</th>
                              <th>Precio</th>
                          </tr>
                          </thead>
                          <tbody className="align-middle">
                            <tr>
                                <td>
                                    {/*<svg
                                        className="bd-placeholder-img rounded" width="160" height="90" role="img">
                                        <title>Placeholder</title>
                                        <rect width="100%" height="100%" fill="#eee"></rect>
                                        <text x="50%" y="50%" fill="#aaa" dy=".3em">Imagen</text>
              </svg>*/}
                                    <img src={`http://localhost:8000/images/${misAnuncios.thumbnailUrl}`} alt="Imagen" width="180" height="180"/>
                                </td>
                                <td>
                                    {misAnuncios.postTitle}
                                </td>
                                <td>
                                    {misAnuncios.postDescription}
                                </td>
                                <td>
                                    {misAnuncios.postPrice}
                                </td>
                            </tr>
                          </tbody>
                      </Table>
                      <hr className="separador"/>
                  </div>
              ))
            }
            <br/>
            <h5 className="text-center welcome2 rounded-pill mb-3 fw-bold">Estos son
              los productos y servicios que has vendido:</h5>
            {
              ventas.map((ventas, index)=>(
                  <div>
                      <p className="text-center fw-bold w-100 badge">Orden # {index+1}</p>
                      <div className="d-flex w-100">
                          <p className="me-auto"><b>Valor total: </b>${ventas.orderTotal} pesos colombianos</p>
                          <p><b>Fecha: </b>{fecha(new Date(ventas.createdAt))}</p>
                      </div>
                      <Table hover>
                          <thead>
                          <tr className="table-primary welcome">
                              <th className="text-center" colSpan="2">Producto o Servicio vendido</th>
                              <th>Descripción</th>
                              <th>Cantidad</th>
                              <th></th>
                          </tr>
                          </thead>
                          <tbody className="align-middle">
                            <tr>
                                <td>
                                    {/*<svg
                                        className="bd-placeholder-img rounded" width="160" height="90" role="img">
                                        <title>Placeholder</title>
                                        <rect width="100%" height="100%" fill="#eee"></rect>
                                        <text x="50%" y="50%" fill="#aaa" dy=".3em">Imagen</text>
                                    </svg>*/}
                                    <img src={`http://localhost:8000/images/${ventas.thumbnailUrl}`} alt="Imagen" width="180" height="180"/>
                                </td>
                                <td>
                                    {ventas.postTitle}
                                </td>
                                <td>
                                    {ventas.postDescription}
                                </td>
                                <td>
                                    {ventas.itemAmount}
                                </td>
                                <td>
                                    <button className="btn btn-primary fw-bold float-end">Reseñas»</button>
                                </td>
                            </tr>
                          </tbody>
                      </Table>
                      <hr className="separador"/>
                  </div>
              ))
            }
          </div>
      </div>
  )
}

export default Ventas