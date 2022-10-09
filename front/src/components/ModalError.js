import React, {useEffect, useState} from "react";
import {Modal} from "react-bootstrap";
import Logo from "../assets/images/Logo.png";

const ModalError = ({error}) => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        if (!(!error || error === "null")) {
            setShow(true);
        }
    }, []);

    const handleClose = () => {
        setShow(false);
        localStorage.removeItem('ERR')
    }

    return (
        <Modal id="modal" className="login" show={show} backdrop="static" keyboard={false} centered
               onHide={handleClose}>
            <Modal.Header closeButton closeVariant="white">
                <Modal.Title className="text-white fw-bold">
                    <i className="bi bi-patch-exclamation-fill me-3"></i>
                    Advertencia
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="b-white text-center">
                <h5>{error}</h5>
                <img className="logo mb-4 mt-3" src={Logo} alt="Free-Lánzate"/>
            </Modal.Body>
            <Modal.Footer className="b-white">
                <button className="btn btn-primary fw-bold float-end" onClick={handleClose}>
                    Entendido
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalError