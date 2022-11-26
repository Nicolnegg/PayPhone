import { React, useState, useEffect } from "react";
import { buscarRecomendaciones } from "../api/buscar";
import ModalAnuncio from "../components/ModalAnuncio";
import Table from "react-bootstrap/Table";
import jwtDecode from "jwt-decode";
import { getAccessToken } from "../api/auth";
import { verOrdenes } from "../api/orders";
import PostsRelacionados from "../components/PostsRelacionados";

const Recomendaciones = () => {
  const [recomendacion, setRecomendacion] = useState([]);

  const UserId = jwtDecode(getAccessToken()).id;
  const [ordenes, setOrdenes] = useState([]);

  useEffect(() => {
    verOrdenes(UserId).then((response) => {
      setOrdenes(response.results);
    });
  }, []);

  useEffect(() => {
    buscarRecomendaciones().then((response) => {
      setRecomendacion(response.results);
    });
  }, []);

  function validaOrdenes(ordenes) {
    if (ordenes.length === 0) {
      return (
        <p className="welcome1 fw-bold text-center">
          Aún no has realizado compras.
        </p>
      );
    }
  }

  function validaRecomendados(ordenes, orden, item) {
    let diferencias = 0;
    let total = 0;
    const revisa = ordenes.slice(0, ordenes.indexOf(orden));
    if (revisa.length > 0) {
      revisa.forEach((previo) => {
        previo.OrderItems.forEach((checkItem) => {
          if (item.Post.PostTitle !== checkItem.Post.PostTitle) {
            diferencias++;
          }
          total++;
        });
      });
    }
    if (diferencias === total) {
      return (
        <div>
          <h5 className="mb-3">
            Porque compraste <b className="mid-badge">{item.Post.PostTitle}</b>,
            te recomendamos:
          </h5>
          <PostsRelacionados id={item.PostId} />
        </div>
      );
    }
  }

  return (
    <div className="contenedorPerfil text-center d-flex">
      <div className="container rounded row w-100">
        <div className="welcome2">
          <h5 className="text-center mt-1 mb-3 fw-bold yellow">
            Los elegidos de payphone
          </h5>
          <div className="d-flex align-items-center justify-content-center">
            <Table hover variant="light">
              <thead>
                <tr className="table-primary welcome">
                  <th colSpan="2" className="text-center">
                    Anuncio
                  </th>
                  <th>Precio</th>
                  <th className="text-center">Descripción</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="align-middle">
                {recomendacion.map((recomendacion) => (
                  <tr>
                    <td>
                      <picture>
                        <img
                          src={recomendacion.imagen}
                          alt={recomendacion.nombre}
                          style={{
                            width: "5rem",
                            maxWidth: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </picture>
                    </td>
                    <td>{recomendacion.nombre}</td>
                    <td>${recomendacion.precio_venta}</td>
                    <td>{recomendacion.nombre}</td>
                    <td>
                      <ModalAnuncio anuncio={recomendacion} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
        {/* <div>
          <h5 className="text-center mt-4 mb-3 fw-bold welcome">Para ti</h5>
          {ordenes.map((orden) =>
            orden.OrderItems.map((item) =>
              validaRecomendados(ordenes, orden, item)
            )
          )}
          {validaOrdenes(ordenes)}
        </div> */}
      </div>
    </div>
  );
};

export default Recomendaciones;
