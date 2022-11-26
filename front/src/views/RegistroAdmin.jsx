import React,{useState} from 'react';
import { notification } from "antd";
import Logo from "../assets/images/Logo.png"
import Background from "../assets/images/fondo.png"
import {registroAdmin} from "../api/user";
import { axios } from "../libs/axios";
import { Link, useNavigate } from "react-router-dom";



const RegistroAdmin = () => {
    const navigate = useNavigate();

    

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
        usuario_id: '',
        nit : '',
        nombre : '',
        logo : '',
        rut : ''
      });

      const changeForm = e => {
        setInputs({
        ...inputs,
        [e.target.name]: e.target.value
         });
     };

     const registrar = async e => {
        e.preventDefault();
        
        const { data: result } = await axios.post("/registro-empresa", inputs);
        const {isOK } = result.isOK;
        console.log(result)
        if (result.isOK) {
            notification["success"]({
                message: "Registro correcto"
            });
            navigate("/login");
        } else {
            notification["error"]({
            message: "Error en el registro"
            });        
        }
    };

    const resetForm = () => {

        setInputs({
            usuario_id: '',
            nit : '',
            nombre : '',
            logo : '',
            rut : ''
        });
      };

    
    return (
            <div className="reg text-center d-flex" style={style} onSubmit={registrar} onChange={changeForm}>
                <div className="form-signin rounded max-w-regfree my-auto">
                    <form>
                        <img className="mb-4 d-flex justify-content-start" src={Logo} alt="PayPhone"/>
                        <h5 className="welcome mb-3 fw-bold">¡Hola, admin!</h5>
                        <div className="row">
                            <div className="col-3 my-auto">
                                <p className="h5 mb-3 fw-bold text-gb">Supermercado!</p>
                                <p>Registra los datos de tu empresa:</p>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <div className="col d-flex">
                                        <div className="form-floating mx-4 mt-2">
                                            <input
                                                type="text"
                                                className="form-control mb-3"
                                                id="usuario_id"
                                                name="usuario_id"
                                                placeholder="ID de la empresa"
                                                defaultValue={inputs.usuario_id}
                                            />
                                            <label htmlFor="pais">ID de la empresa</label>
                                        </div>
                                        <div className="form-floating mx-4 mt-2">
                                            <input
                                                type="text"
                                                className="form-control mb-3"
                                                id="nit"
                                                name="nit"
                                                placeholder="nit"
                                                defaultValue={inputs.nit}
                                            />
                                            <label htmlFor="ciudad">NIT</label>
                                        </div>
                                        <div className="form-floating mx-4 mt-2">
                                            <input
                                                type="text"
                                                className="form-control mb-3"
                                                id="nombre"
                                                name="nombre"
                                                placeholder="nombre"
                                                defaultValue={inputs.nombre}
                                            />
                                            <label htmlFor="postal">Nombre de la empresa</label>
                                        </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-floating mx-4 mt-1">
                                                <input
                                                    type="text"
                                                    className="form-control mb-3"
                                                    id="rut"
                                                    name="rut"
                                                    placeholder="rut"
                                                    defaultValue={inputs.rut}
                                                />
                                                <label htmlFor="postal">RUT</label>
                                            </div>
                                            <div className="form-floating mx-4 mt-1">
                                                <input
                                                    type="url"
                                                    className="form-control mb-3"
                                                    id="logo"
                                                    name="logo"
                                                    placeholder="logo"
                                                    defaultValue={inputs.logo}
                                                />
                                                <label htmlFor="postal">Logo</label>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <p className="h5 mb-3 fw-bold text-gb">Datos de contacto</p>
                                <div className="row">
                                    <div className="col">
                                        <p className="text-start ms-4">WhatsApp:</p>
                                        <div className="input-group mx-4 mt-1">
                                            <div>
                                        <span className="input-group-text bg-b text-white mb-3"><i
                                            className="fa fa-whatsapp me-2"> </i> +57 </span>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control mb-3 mx-3 w-50"
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                placeholder=""
                                                defaultValue={inputs.phoneNumber}
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <p className="text-start ms-4">Página web:</p>
                                        <div className="input-group mx-4 mt-1">
                                            <div>
                                        <span className="input-group-text bg-b text-white mb-3"><i
                                            className="fa fa-external-link"> </i></span>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control mb-3 mx-3 w-50"
                                                id="websiteUrl"
                                                name="websiteUrl"
                                                placeholder=""
                                                defaultValue={inputs.websiteUrl}
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <p className="text-start ms-4">Facebook:</p>
                                        <div className="input-group mx-4 mt-1">
                                            <div>
                                        <span className="input-group-text bg-b text-white mb-3"><i
                                            className="fa fa-facebook"> </i></span>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control mb-3 mx-3 w-50"
                                                id="facebookUrl"
                                                name="facebookUrl"
                                                placeholder=""
                                                defaultValue={inputs.facebookUrl}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">

                                    <div className="col">
                                        <p className="text-start ms-4">Instagram:</p>
                                        <div className="input-group mx-4 mt-1">
                                            <div>
                                        <span className="input-group-text bg-b text-white mb-3"><i
                                            className="fa fa-instagram"> </i></span>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control mb-3 mx-3 w-50"
                                                id="instagramUrl"
                                                name="instagramUrl"
                                                placeholder=""
                                                defaultValue={inputs.instagramUrl}
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <p className="text-start ms-4">Twitter:</p>
                                        <div className="input-group mx-4 mt-1">
                                            <div>
                                        <span className="input-group-text bg-b text-white mb-3"><i
                                            className="fa fa-twitter"> </i></span>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control mb-3 mx-3 w-50"
                                                id="twitterUrl"
                                                name="twitterUrl"
                                                placeholder=""
                                                defaultValue={inputs.twitterUrl}
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <p className="text-start ms-4">Linkedin:</p>
                                        <div className="input-group mx-4 mt-1">
                                            <div>
                                        <span className="input-group-text bg-b text-white mb-3"><i
                                            className="fa fa-linkedin"> </i></span>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control mb-3 mx-3 w-50"
                                                id="linkedinUrl"
                                                name="linkedinUrl"
                                                placeholder=""
                                                defaultValue={inputs.linkedinUrl}
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-4">
                                <p className="h5 mb-3 fw-bold text-gb">Descripción</p>
                                <div className="col">
                                    <div className="input-group me-4 mt-1">
                                        <div>
                                            <span> Oneliner: </span>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control mb-3 mx-3"
                                            id="oneliner"
                                            name="oneliner"
                                            placeholder=""
                                            defaultValue={inputs.oneliner}
                                        />
                                    </div>
                                    <div className="mx-4 mt-1">
                                    <textarea
                                        className="form-control mb-1 mx-3 w-100"
                                        id="adminDescription"
                                        name="adminDescription"
                                        placeholder="Ingresa aquí los detalles"
                                        defaultValue={inputs.adminDescription}
                                    />
                                    </div>
                                </div>
                                <button className="w-75 btn btn-lg btn-primary fw-bold mx-auto mt-4 mb-3"
                                        type="submit">Finalizar Inscripción
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

export default RegistroAdmin