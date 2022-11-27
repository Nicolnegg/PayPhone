import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Footer } from "./info/Footer";
import exito from "../assets/images/exito.png";
import carulla from "../assets/images/carulla.png";
import d1 from "../assets/images/D1.png";
import olimpica from "../assets/images/olimpica.png";
import Background from "../assets/images/fondo.png";

const MisVentas = () => {
  const style = {
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center center",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    width: "100vw",
    height: "400vh",
  };

  return (
    <div className="contenedorPerfil" style={style}>
      <div className="contenedorPerfil text-center d-flex">
        <div className="container rounded row w-100">
          <h5 className="text-center welcome2 mb-3 fw-bold">
            Estos son los Supermercados asociados:
          </h5>
          <h2 className="welcome fw-bold">
            Tu empresa todavia no sale en esta parte, ya que no se ha aceptado,
            Gracias por esperar c:
          </h2>
          <div>
            <div className="top mt-3">
                <img className="justify-left" src={carulla} alt="Carulla" />
              
              <h3 className="welcome1 fw-bold">Carulla</h3>
              <hr className="separador" />
              <a>
                {" "}
                Carulla es una cadena colombiana de supermercados perteneciente
                al Grupo Éxito. Tiene presencia en el territorio nacional con
                alrededor de 90 almacenes ubicados en 17 municipios, siendo
                Bogotá la ciudad con más almacenes de la marca.
              </a>
            </div>

            <div className="top mt-3">
                <img className="center" src={olimpica} alt="Olimpica" />
              <h3 className="welcome1 fw-bold">Olímpica</h3>
              <hr className="separador" />
              <a>
                {" "}
                Grupo Empresarial Olímpica es un conglomerado colombiano, con
                distintos enfoques, que se estableció en la ciudad de
                Barranquilla en la década de 1950. Con la propiedad de las
                tiendas Olímpica, la Cadena Olímpica, el banco Serfinanza,
                droguerías Olímpica, el Junior de Barranquilla, Cadena Radial
                Olímpica Estéreo, los Caimanes de Barranquilla, Sonovista
                Publicidad, Portales Urbanos, entre otros negocios. Es junto al
                Grupo Éxito, Grupo Empresarial Bolívar, Grupo Empresarial
                Antioqueño, Valorem, Gilinski Group, y el Grupo Aval, uno de los
                conglomerados más grandes e importantes del país.
              </a>
            </div>

            <div className="top mt-3">
                <img className="center" src={exito} alt="Exito" />
              <h3 className="welcome1 fw-bold">Éxito</h3>
              <hr className="separador" />
              <a>
                {" "}
                Somos parte de la plataforma del retail de alimentos líderes en
                Suramérica. Presentes en Colombia con Grupo Éxito, en Uruguay
                con los Grupos Disco y Devoto y en Argentina con Libertad. Somos
                un negocio que se adapta a las nuevas formas de consumo de los
                clientes. A través de la innovación, la transformación digital,
                las experiencias y la sostenibilidad, respondemos a un entorno
                competitivo y aportamos al desarrollo de los lugares donde
                tenemos presencia. Somos parte de la plataforma líder del retail
                más grande de Suramérica, con presencia en Colombia con las
                marcas Éxito, Carulla, Super Inter, Surtimax, Surtimayorista y
                Viva, y en Uruguay con Grupo Disco y Grupo Devoto.
              </a>
            </div>

            <div className="top mt-3">
                <img className="center" src={d1} alt="D1" />
              <h3 className="welcome1 fw-bold">Olímpica</h3>
              <hr className="separador" />
              <a>
                {" "}
                Tiendas D1 es una cadena de tiendas de descuento tipo hard
                discount en Colombia. Fue creada por el empresario chileno
                Michel Olmi en 2009, seis años después vendió el negocio al
                Grupo Santo Domingo.Hoy es propiedad de Koba International Group
                y a 2022 tiene más de 2000 tiendas en Colombia distribuidas en
                450 municipios de 28 departamentos. Su principal accionista es
                Valorem con cerca del 60% del total.
              </a>
            </div>

            <div className="h3 mb-3">
              <Link to="/" className="badge mt-1 mb-1">
                <button className="bi bi-house-door-fill" type="submit">
                  Regresar al inicio
                </button>
              </Link>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};
export default MisVentas;
