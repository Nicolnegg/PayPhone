import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { traerItemsCanasta, traerSesion, terminarCompra } from "../api/canasta";
import { PageItem, Table } from "react-bootstrap";
import { eliminarItem } from "../api/canasta";
import CambiarCantidad from "../components/CambiarCantidad";
import jwtDecode from "jwt-decode";
import { getAccessToken } from "../api/auth";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import ModalApproved from "../components/ModalApproved";
import { Document, Page } from "react-pdf";

const Carrito = () => {
  const estado = useParams();

  const initialOptions = {
    "client-id":
      "AcftNW3oFidjBFIRQcqO91Fhx8TfUOjmXAJkHS_BkTuRbbYF8XwYWrFjobyHZc-dOQ2krsWSm5iMnV4q",
    locale: "es_CO",
    currency: "USD",
  };

  const UserId = jwtDecode(getAccessToken()).id;
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState([]);
  const [sesion, setSesion] = useState([]);

  useEffect(() => {
    traerItemsCanasta(UserId).then((response) => {
      setItems(response.results);
      setTotal(response.total);
    });
  }, []);

  useEffect(() => {
    traerSesion(UserId).then((response) => {
      setSesion(response.results);
    });
  }, []);

  function refreshPage() {
    window.location.reload();
  }

  const eliminar = async (postId) => {
    const result = await eliminarItem(UserId, postId);
    console.log(result);
    refreshPage();
  };

  const finalizarCompra = async (code) => {
    const result = await terminarCompra(UserId);
    localStorage.setItem("PAID", code);
    // refreshPage();
  };

  function loadApproved() {
    return <ModalApproved location="carrito" />;
  }

  function dolares(num) {
    const dolar = Math.round((num * 100) / 4138.5) / 100;
    return dolar.toString();
  }

  if (items.length === 0) {
    return (
      <div className="contenedorPerfil text-center d-flex">
        <div className="container rounded row w-100">
          <h5 className="text-center welcome2 rounded-pill mb-3 fw-bold">
            Estos son los productos y servicios que hay en tu carrito:
          </h5>
          <div>
            <h5>Al parecer, tu carrito se encuentra vacío</h5>
            <Link to="../buscar">
              <span className="badge mt-2 text-decoration-underline">
                ¡Haz click acá para buscar eso que necesitas!
                <i className="bi bi-search ms-3"> </i>
              </span>
            </Link>
          </div>
          {loadApproved(estado)}
        </div>
      </div>
    );
  } else {
    console.log(total);
    return (
      <div className="contenedorPerfil text-center d-flex">
        <div className="container rounded row w-100">
          <h5 className="text-center welcome2 rounded-pill mb-3 fw-bold">
            Estos son los productos y servicios que están en tu carrito:
          </h5>
          {items.map((item, index) => (
            <div>
              <p className="text-center fw-bold w-100 badge">
                Item # {index + 1}
              </p>

              <Table hover>
                <thead>
                  <tr className="table-primary welcome">
                    <th colSpan="2">Producto o Servicio Adquirido</th>
                    <th>Supermercado</th>
                  </tr>
                </thead>
                <tbody className="align-middle">
                  <tr>
                    <td>
                      <picture>
                        <img
                          src={item.imagen}
                          alt={item.nombre}
                          style={{
                            width: "5rem",
                            maxWidth: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </picture>
                    </td>
                    <td>{item.nombre}</td>
                    <td>Éxito</td>
                  </tr>
                </tbody>
              </Table>
              <div className="d-flex w-100">
                <p className="me-auto my-auto">
                  <b>Precio unitario: </b>${item.precio_venta} pesos colombianos
                </p>
                <CambiarCantidad
                  className="float-end"
                  id={item.precio_venta}
                  cantidad={item.cantidad}
                />
              </div>
              <hr className="separador" />
            </div>
          ))}
        </div>
        <div className="row col container rounded w-50 h-100">
          <div>
            <h5 className=" welcome mb-3 fw-bold">
              <i className="bi bi-cart4 me-3"></i>
              Resumen de tu carrito
            </h5>
            <hr className="separador" />
            {items.map((item, index) => (
              <div>
                <p className="text-center fw-bold w-100 badge">{item.nombre}</p>
                <p className="me-auto">
                  <b className="welcome1">Unidades de producto: </b>
                  {item.cantidad}
                </p>
                <p className="me-auto">
                  <b className="welcome1">Precio resultante:</b> $
                  {item.precio_venta} pesos colombianos
                </p>
                <hr />
              </div>
            ))}
            <div className="welcome2 row d-flex mt-4">
              <div className="col">
                <strong>Precio total:</strong>
              </div>
              <div className="col float-end">
                <strong>$ {total} </strong>
              </div>
            </div>

            <div className="row mt-4">
              <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: dolares(total),
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                      finalizarCompra(data.payerID);
                    });
                  }}
                />
              </PayPalScriptProvider>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Carrito;
