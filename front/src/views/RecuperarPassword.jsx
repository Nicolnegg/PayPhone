import React, {useState} from 'react'
import Logo from "../assets/images/Logo.png"
import Background from "../assets/images/fondo.png"
import {recoverPassword} from "../api/recover";
import {useParams} from "react-router-dom";
import {notification} from "antd";

const RecuperarPassword = () => {

    const {action} = useParams()

    const style = {
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center center',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        width: '100vw',
        height: '100vh'
    }

    const [inputs, setInputs] = useState({
        email: "",
    });

    const changeForm = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const enviarCorreo = async e => {
        e.preventDefault();
        const result = await recoverPassword(inputs, action);
        if (result === "El email para la recuperación ha sido enviado") {
            notification["success"]({
                message: "El email para la recuperación ha sido enviado"
            });
            resetForm();
            window.location.href = "/login";
        }
    }

    const resetForm = () => {
        setInputs({
            email: "",
        });
    };

    let title;
    let subtitle;
    let button;

        if(action === "recuperar"){
            title = "¿Olvidaste tu contraseña?"
            subtitle = null
            button = "Recuperar ahora"
        }else{
            title = "Cambia la contraseña"
            subtitle = "De tu cuenta asociada al correo " + action
            button = "Confirmar envío"
        }

    return (
      <div className="forgot text-center d-flex" style={style}>
        <div className="form-signin rounded max-w-forgp my-auto">
            <form onSubmit={enviarCorreo} onChange={changeForm}>
                <img className="w-25 mb-4 d-flex justify-content-start" src={Logo} alt="Free-Lánzate"/>
                <h5 className="welcome mb-3 fw-bold">{title}</h5>
                <p>{subtitle}</p>
                <div className="form-floating w-75 mx-auto mt-5">
                    <input
                            type="email"
                            className="form-control mb-5"
                            id="email"
                            name="email"
                            placeholder="username"
                    />
                    <label htmlFor="email">Correo electrónico</label>
                </div>
                <div>
                    <button className="w-75 btn btn-lg btn-primary fw-bold mx-auto mb-3 d-flex align-items-center" type="submit">{button} <i className="bi bi-envelope-fill button-icon"></i></button>
                </div>
            </form>
        </div>
      </div>
    )
}

export default RecuperarPassword