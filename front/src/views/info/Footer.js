import React from "react";
import Logo from "../../assets/images/Logo.png"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import ModalApproved from "../../components/ModalApproved";

export const Footer = () => {

    const initialOptions = {
        "client-id": "Aa9dtYax1fms_6h0oLlp1G1ji_t_aHok_-iWzvhE1jE3JFDHmy-luKUetTIAx85ibBweGhbgCR-J02d5",
        locale: "es_CO",
        currency: "USD"
    };

    const finalizarCompra = async (code) =>{
        localStorage.setItem("PAID",code)
        window.location.reload()
    }

    return(
        <div className="footer welcome2 ">
            <img className="logo d-flex mx-auto w-25 mb-2 welcome3" src={Logo} alt="PayPhone"/>
            <h5 className="footer_element text-decoration-underline">Contáctanos y síguenos en nuestras redes: </h5>
            <div className="d-flex my-4">
                <div className="col">
                    <a target="_blank" className="text-white mx-3" href="https://wa.me/573173302022"><i className="fa fa-whatsapp big-icon mx-3"></i></a>
                    <h6 className="text-white mx-3">PayPhone</h6>
                </div>
                <div className="col">
                    <a target="_blank" className="text-white mx-3" href="https://www.instagram.com/manuelma_4/"><i className="fa fa-instagram big-icon mx-3"></i></a>
                    <h6 className="text-white mx-3">@manuelma_4</h6>
                </div>
                <div className="col">
                    <a target="_blank" className="text-white mx-3" href="https://www.facebook.com/manueldavid.maya/"><i className="fa fa-facebook big-icon mx-3"></i></a>
                    <h6 className="text-white mx-3">@Manuel_Maya</h6>
                </div>
                <div className="col">
                    <a target="_blank" className="text-white mx-3" href="https://twitter.com/ManuelD_Maya"><i className="fa fa-twitter big-icon mx-3"></i></a>
                    <h6 className="text-white mx-3">@Manuel_Maya</h6>
                </div>
                <div className="col">
                    <a target="_blank" className="text-white mx-3" href="mailto:manueldmaya@gmail.com"><i className="fa fa-envelope big-icon mx-3"></i></a>
                    <h6 className="text-white mx-3">manueldmaya@gamil.com</h6>
                </div>
            </div>
            <h5 className="footer_element text-decoration-underline">
                ¿Desear donar para contibuir a este proyecto?
                Haz clic a continuación
            </h5>
            <div className="row mt-4">
                <PayPalScriptProvider options={initialOptions}>
                    <PayPalButtons
                        createOrder={(data, actions) => {
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        amount: {
                                            value: "5",
                                        },
                                    },
                                ],
                            });
                        }}
                        onApprove={(data, actions) => {
                            return actions.order.capture().then((details) => {
                                finalizarCompra("done");
                            });
                        }}
                    />
                </PayPalScriptProvider>
            </div>
            <ModalApproved location="info"/>
        </div>
    )
}