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
                        <h3 className="welcome1 fw-bold">¿Cómo crear una cuenta?</h3>
                        <p className="w-75 mx-auto">
                            <br/>
                            En el extremo superior de la página principal encontrarás un botón de inicio de sesión desde aca te 
                            podrás redirigir a la ventana de registro, solo necesitas llenar unos datos básicos para registrarte como tu cédula, correo. nombre, fecha de nacimiento, etc. Luego puede volver a inicio de sesión e ingresar a la página web.
                            <br/>
                        </p>
                        <hr className="separador"/>
                        <h3 className="welcome1 fw-bold">¿Qué beneficios tiene utilizar PayPhone?</h3>
                        <p className="w-75 mx-auto">
                            <br/>
                            PayPhone mejora el tiempo de espera en filas dentro de supermercados de cadena y diferentes establecimientos que deseen utilizar este servicio. Reclamas los productos en el establecimiento seleccionado de manera eficiente, ahorrando este tiempo muerto en fila. Con la ventaja de elegir los productos que quieres comprar en el supermercado.
                            Además utiliza una facturación electrónica teniendo una reducción en el uso del papel, lo cual contribuye al medio ambiente.
                            <br/>
                        </p>
                        <hr className="separador"/>
                        <h3 className="welcome1 fw-bold">¿Cómo realizo una compra del producto?</h3>
                        <p className="w-75 mx-auto">
                            Una vez inicia sesión  se elige el supermercado donde se desea recoger el producto, y se pasa a la página principal donde podras ver todos los productos del supermercado, agregas los productos que deseas comprar al carrito y proceder a realizar el pago, una vez aceptado el pago se generará una factura electrónica con la que recogerás los productos en el supermercado.
                            <br/>
                        </p>
                        <hr className="separador"/>
                        <h3 className="welcome1 fw-bold">¿Qué medios de pago recibe PayPhone?</h3>
                        <p className="w-75 mx-auto">
                            Se pueden realizar el pago por medio de PayPal y con tarjeta de credito y debito.
                            <br/>
                        </p>
                        <hr className="separador"/>
                        <h3 className="welcome1 fw-bold">¿Cómo recojo los productos comprados?</h3>
                        <p className="w-75 mx-auto">
                            Al realizar la compra obtendremos la factura electrónica donde se podrán ver los productos comprados, el supermercado se encargará de revisar esta factura.
                            Vas al supermercado escoge los productos comprados anteriormente, te diriges a la salida y muestras la factura al vigilante
                            <br/>
                        </p>
                        <hr className="separador"/>
                        <h3 className="welcome1 fw-bold">¿Dónde recojo los productos comprados?</h3>
                        <p className="w-75 mx-auto">
                            En el supermercado que seleccionaste a la hora de seleccionar la tienda para comprar, en el cual aparece la dirección, y recoges los productos, de manera que no realices fila, solo tomas tus productos y sales.
                            <br/>
                        </p>
                        <hr className="separador"/>
                        <h3 className="welcome1 fw-bold">¿Cómo agrego mi supermercado a PayPhone?</h3>
                        <p className="w-75 mx-auto">
                            Sencillo, solo necesitas seleccionar la pestaña de registrarse como admin, y luego nosotros te aceptamos para que puedas ser un nuevo supermercado dentro de la aplicación.
                            <br/>
                        </p>
                        <hr className="separador"/>
                        <h3 className="welcome1 fw-bold">¿Cuanto se demoran en aceptar mi supermercado?</h3>
                        <p className="w-75 mx-auto">
                            Todo depende de lo saturado que se encuentre el sistema de aceptar supermercado en ese momento, pero normalmente nuestra aplicación acepta supermercado en un periodo de tiempo de 1 a 2 meses.
                            <br/>
                        </p>
                        <hr className="separador"/>
                        <h3 className="welcome1 fw-bold">¿Qué hago si quiero devolver un producto?</h3>
                        <p className="w-75 mx-auto">
                            Todo lo que tenga que ver con la devolución del producto, va directamente relacionado con el supermercado, Payphone no se hace responsable de las devoluciones del producto ya que solo somos un intermediario.
                            <br/>
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