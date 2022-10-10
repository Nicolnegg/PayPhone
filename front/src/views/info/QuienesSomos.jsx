import React, {useState} from 'react'
import {Footer} from "./Footer";

const QuienesSomos = () => {

    const [info,setInfo] = useState("general")

    const result = (info) =>{
        if (info === "general"){
            return(
                <>
                    <h2 id="Empresa" className="welcome fw-bold">Información General de la Empresa</h2>
                    <div>
                        <h3 className="welcome1 fw-bold">Qué es PayPhone?</h3>
                        <p className="w-75 mx-auto">
                            PayPhone es una aplicación web diseñada por estudiantes de Ingeniería de Sistemas de la Univerisidad Nacional de Colombia con el
                            Esta aplicación va dirigida para usuarios de supermercados de cadena en Colombia como son Éxito, Olímpica, Cencosud(Jumbo, metro),
                            entre otras. 
                            Según el informe realizado por Consumer Insights, de la consultora británica Kantar Worldpanel se determinó que del total de la 
                            población, 18% compra en este tipo de almacenes, por lo cual se calcula que la aplicación beneficiará alrededor de 9'158.400 de 
                            personas al mes.
                            <br/>
                            <br/>
                            <h3 className="welcome1 fw-bold">Capacidad diseñada</h3>
                            La aplicación estará disponible como aplicación web, esta sería completamente gratuita.
                            En un primer momento la aplicación se encontrará disponible para los supermercados Éxito, Olímpica y Cencosud(Jumbo, metro), 
                            aunque en un futuro se abarcará a todo el sector.
                            <br/>
                            <br/>
                            PayPhone está enfocado tanto en los dueños de los supermercados para que abarquen una mayor población consumidora de su tienda, 
                            como en las personas que asisten a supermercados de cadena los cuales se encuentran con una fila larga, la cual les tomara 
                            tiempo, por lo cual se decide realizar una aplicación en la cual pagas tus productos desde la aplicación, recibes tus productos
                            y sales del supermercado, sin filas ni preocupaciones.
                        </p>
                        <hr className="separador"/>
                    </div>
                </>
            )
        } else if (info === "faq"){
            return(
                <>
                    <h2 id="Preguntas" className="welcome fw-bold">Preguntas Frecuentes</h2>
                    <hr className="separador"/>
                    <div>
                        <h3 className="welcome1 fw-bold">Pregunta</h3>
                        <p className="w-75 mx-auto">
                            Descripción
                            <br/>
                            <br/>
                            Frase xd
                            <br/>
                            <br/>

                            Conclusión de la respuesta
                        </p>
                        <hr className="separador"/>
                        <h3 className="welcome1 fw-bold">Pregunta</h3>
                        <p className="w-75 mx-auto">
                            Descripción
                            <br/>
                            <br/>
                            Frase xd
                            <br/>
                            <br/>

                            Conclusión de la respuesta
                        </p>
                        <hr className="separador"/>
                        <h3 className="welcome1 fw-bold">Pregunta</h3>
                        <p className="w-75 mx-auto">
                            Descripción
                            <br/>
                            <br/>
                            Frase xd
                            <br/>
                            <br/>

                            Conclusión de la respuesta
                        </p>
                        <hr className="separador"/>
                        <h3 className="welcome1 fw-bold">Pregunta</h3>
                        <p className="w-75 mx-auto">
                            Descripción
                            <br/>
                            <br/>
                            Frase xd
                            <br/>
                            <br/>

                            Conclusión de la respuesta
                        </p>
                        <hr className="separador"/>
                        <h3 className="welcome1 fw-bold">Pregunta</h3>
                        <p className="w-75 mx-auto">
                            Descripción
                            <br/>
                            <br/>
                            Frase xd
                            <br/>
                            <br/>

                            Conclusión de la respuesta
                        </p>
                        <hr className="separador"/>
                        <h3 className="welcome1 fw-bold">Pregunta</h3>
                        <p className="w-75 mx-auto">
                            Descripción
                            <br/>
                            <br/>
                            Frase xd
                            <br/>
                            <br/>

                            Conclusión de la respuesta
                        </p>
                        <hr className="separador"/>
                        <h3 className="welcome1 fw-bold">Pregunta</h3>
                        <p className="w-75 mx-auto">
                            Descripción
                            <br/>
                            <br/>
                            Frase xd
                            <br/>
                            <br/>

                            Conclusión de la respuesta
                        </p>
                        <hr className="separador"/>
                        <h3 className="welcome1 fw-bold">Pregunta</h3>
                        <p className="w-75 mx-auto">
                            Descripción
                            <br/>
                            <br/>
                            Frase xd
                            <br/>
                            <br/>

                            Conclusión de la respuesta
                        </p>
                        <hr className="separador"/>
                        <h3 className="welcome1 fw-bold">Pregunta</h3>
                        <p className="w-75 mx-auto">
                            Descripción
                            <br/>
                            <br/>
                            Frase xd
                            <br/>
                            <br/>

                            Conclusión de la respuesta
                        </p>
                        <hr className="separador"/>
                    </div>
                </>
            )
        } else {

        }
    }

  return (
    <div>
        <h1 className="welcome2 w-75 mx-auto fw-bold">¿Quiénes somos?</h1>
    <div className="submenu">

        <nav className="my-4 fw-bold w-100 d-flex">
            <button className="btn rounded btn-primary fw-bold mx-auto" onClick={() => setInfo("general")}>Información General de la Empresa</button>
            <button className="btn rounded btn-primary fw-bold mx-auto" onClick={() => setInfo("faq")}>Preguntas Frecuentes</button>
        </nav>
        {
            result(info)
        }
        <Footer />
    </div>


    </div>
  )
}

export default QuienesSomos