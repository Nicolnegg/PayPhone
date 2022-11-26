import React, {useState} from 'react'
import {Footer} from "./Footer";

const Legal = () => {
    const [info,setInfo] = useState("tyc")

    const result = (info) => {
        if (info === "tyc") {
            return(
                <>
                    <h2 id="Terminos" className="welcome fw-bold">Términos y Condiciones de uso</h2>
                    <div>
                        <h3 className="welcome1 fw-bold">Términos y Condiciones</h3>
                        <p className="w-75 mx-auto">
                            <br/>
                            <br/>
                            <ol>

                                <li>
                                Al comprar un artículo, aceptas que: (i) eres responsable de leer el listado completo del artículo antes de comprometerte a comprarlo: (ii) celebras un contrato legalmente vinculante para comprar un artículo cuando te comprometed a comprar un artículo y completar el proceso de check-out.
                                Los precios que cobramos por usar nuestros servicios / para nuestros productos se enumeran en  la página web. Nos reservamos el derecho de cambiar nuestros precios para los productos que se muestran en cualquier momento y de corregir los errores de precios que pueden ocurrir inadvertidamente. Información adicional sobre precios e impuestos sobre las ventas está disponible en la página de pagos. 

                                </li>
                                <br/>
                                <li>
                                    Al comprar un producto de un supermercado, aceptas que:
                                    <br/>
                                    <br/>
                                    <ul>
                                        <li>
                                            Eres responsable de leer el listado completo del artículo antes de
                                            comprometerte a comprarlo.
                                        </li>
                                        <li>
                                            Celebras un contrato legalmente vinculante para comprar un artículo cuando
                                            te comprometed a comprar un artículo y completar el
                                            proceso de check-out.
                                        </li>
                                        <br/>
                                    </ul>
                                    Los precios que cobramos por usar nuestros productos / servicios para nuestros
                                    productos se enumeran en la página web.
                                    Nos reservamos el derecho de cambiar nuestros precios para los productos que se
                                    muestran en cualquier momento y de corregir
                                    los errores de precios que pueden ocurrir inadvertidamente. Información adicional
                                    sobre precios e impuestos sobre las ventas
                                    está disponible en la página de pagos.
                                    <br/>
                                    <br/>
                                    La tarifa por los servicios y cualquier otro cargo que pueda incurrir en relación
                                    con tu uso del servicio,
                                    como los impuestos y las posibles tarifas de transacción, se cobrarán mensualmente a
                                    tu método de pago.
                                </li>
                                <br/>
                                <li>
                                    Para cualquier producto no dañado, simplemente devuélvelo con sus respectivos
                                    accesorios y el paquete incluidos
                                    junto con el recibo original (o recibo de regalo) dentro de los 14 días posteriores
                                    a la fecha que recibiste
                                    el producto, y lo cambiaremos o te ofreceremos un reembolso basado en el método de
                                    pago original.
                                    <br/>
                                    <br/>
                                </li>
                            </ol>
                        </p>
                        <hr className="separador mt-4"/>
                    </div>
                </>
            )
        }
        if (info === "legal") {
            return(
                <>
                    <h2 id="Legal" className="welcome fw-bold">Aviso Legal</h2>
                    <div>
                        <h3 className="welcome1 fw-bold">Leyes que contemplan la aplicación</h3>
                        <p className="w-75 mx-auto">
                            Ley de protección de datos(?)
                            <ul>
                                <li>
                                    Solicitación de datos(?)
                                </li>
                                <li>
                                    Información para solicitar datos(?)
                                </li>
                                <li>
                                    De esto se encarga la superintendencia de industria y comercio
                                </li>
                            </ul>

                            Politica de privacidad segun PayPhone
                            <br/>
                            <br/>
                            PayPhone siempre sera el que informe de cualquier tratamiento de datos
                            <br/>
                            <br/>
                            Las Políticas de Privacidad se regirán por las leyes de la República de Colombia.
                            Ante cualquier controversia o divergencia relacionada con la interpretación, validez,
                            celebración o cumplimiento de las mismas, tú y Mercado Libre declaran que se someten a la
                            jurisdicción exclusiva de los Tribunales competentes de la Ciudad de Bogotá, renunciando
                            expresamente a cualquier otro fuero y/o jurisdicción que pudiera corresponderles.
                            Los procedimientos se llevarán a cabo en idioma castellano.
                            <br/>
                            <br/>
                            La autoridad de aplicación en la República de Colombia en materia de protección de datos
                            personales es la Delegatura para la Protección de Datos Personales de la Superintendencia
                            de Industria y Comercio y las normas en materia de protección de datos son la <b>Ley 1581 de
                            2012</b>,
                            el <b>Decreto 1377 de 2013</b> y demás normas concordantes y las normas en materia de
                            reglamentación de datos y firmas digitales para la utilización
                            del comercio electrónico o e-commerce, la <b>ley 527 de 1999</b>.
                        </p>
                        <hr className="separador"/>
                    </div>
                </>
            )
        }
        if (info === "priv") {
            return(
                <>
                    <h2 id="Privacidad" className="welcome fw-bold">Declaración de Privacidad y Seguridad en la
                        Información</h2>
                    <div>
                        <h3 className="welcome1 fw-bold">Declaración de Privacidad </h3>
                        <p className="w-75 mx-auto">
                            En PayPhone entendemos a la protección de los datos personales como una oportunidad para
                            generar valor para nuestros usuarios. Haciendo un uso responsable de la información personal,
                            no sólo protegemos la privacidad de quienes nos confiaron sus datos, sino que les permitimos 
                            operar con seguridad y confianza en nuestro ecosistema.
                            <br/>
                            <br/>
                            Por ello, tu privacidad es muy importante para nosotros y nos esforzamos para protegerla.
                            <br/>
                            <br/>
                            Relleno con PayPhone acerca de la declaración de privacidad
                            <br/>
                            <br/>
                            Frase de declaración de privacidad
                        </p>
                        <hr className="separador"/>
                        <h3 className="welcome1 fw-bold">¿Cómo se integra PayPhone con esta declaración?</h3>
                        <p className="w-75 mx-auto">
                            El objetivo de PayPhone es democratizar el comercio, el dinero, los pagos, los envíos y
                            el crédito.
                            Por esta razón, es importante que tengas en cuenta que cuando te registras en cualquiera de
                            estas plataformas,
                            estás generando un usuario que te permitirá operar en todas las demás.
                            Para ello es necesario que tus datos sean compartidos entre todas las empresas aliadas de
                            PayPhone que conforman las plataformas.
                            <br/>
                            <br/>
                            Esta Declaración de Privacidad aplica a todos los servicios y operaciones de tratamiento de
                            datos de PayPhone.
                        </p>
                        <hr className="separador"/>
                        <h3 className="welcome1 fw-bold">¿Quién es el responsable del tratamiento de la información?</h3>
                        <p className="w-75 mx-auto">
                            PayPhone es el responsable del tratamiento de los datos de los usuarios y de los
                            visitantes de sus Plataformas
                            a través de sus empresas subsidiarias o filiales.
                            <br/>
                            El responsable del tratamiento es quien decide sobre el tratamiento de los datos personales.
                            Para ello determina los fines o usos para los que se utilizará la información personal y los
                            medios
                            que serán utilizados para ese tratamiento.
                        </p>
                        <hr className="separador"/>
                        <h3 className="welcome1 fw-bold">¿Qué información recolectamos?</h3>
                        <p className="w-75 mx-auto">
                            PayPhone recolecta tu información personal para que puedas disfrutar de nuestros
                            servicios, y poder mejorarlos de manera continua.
                            <br/>
                            <br/>
                            En algunos casos, la información la facilitas tú mismo, al registrarte o al proveer
                            información cuando
                            utilizas alguno de nuestros servicios. En otros los recolectamos automáticamente, como
                            cuando navegas por nuestras páginas o;
                            utilizas nuestros servicios. También podemos recolectar información acerca tuyo de otras
                            fuentes confiables.
                            <br/>
                            <br/>
                            No tienes la obligación de proporcionarnos la información personal que se identificó
                            anteriormente,
                            sin embargo, este es un requisito esencial para poder contratar y/o tener cualquier tipo de
                            relación con PayPhone y,
                            si no proporcionas esta información, no podremos brindarte nuestros servicios o nuestra
                            capacidad para hacerlo puede
                            verse significativamente obstaculizada. La inexactitud o falsedad de los datos personales
                            que proporciones podría causar
                            la suspensión de los Servicios. Asimismo, PayPhone podrá suspender o inhabilitar
                            definitivamente a aquellos usuarios
                            que violen esta Declaración de Privacidad.
                        </p>
                        <hr className="separador"/>
                        <h3 className="welcome1 fw-bold">Seguridad en la información</h3>
                        <p className="w-75 mx-auto">
                            PayPhone cumple con la normativa y los estándares de la industria en medidas de
                            seguridad aplicables a tu Información Personal.

                            PayPhone no se hace responsable por interceptaciones ilegales o violación de sus
                            sistemas o bases de datos,
                            o por su utilización por parte de personas no autorizadas. PayPhone tampoco se hace
                            responsable por la indebida
                            utilización de la información obtenida por esos medios.
                        </p>
                        <hr className="separador"/>
                    </div>
                </>
            )
        }
    }

  return (
    <div>
        <h1 className="welcome2 w-75 mx-auto fw-bold">Información legal</h1>
        <div className="submenu">
        <nav className="my-4 fw-bold w-100 d-flex">
            <button className="btn rounded btn-primary fw-bold mx-auto" onClick={() => setInfo("tyc")}>Términos y condiciones</button>
            <button className="btn rounded btn-primary fw-bold mx-auto" onClick={() => setInfo("legal")}>Aviso Legal</button>
            <button className="btn rounded btn-primary fw-bold mx-auto" onClick={() => setInfo("priv")}>Declaración de privacidad</button>
        </nav>
        {
            result(info)
        }
        <Footer />
        </div>
    </div>
  )
}

export default Legal