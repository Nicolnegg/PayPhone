
import { Modal, Button } from "react-bootstrap";
import React, {useState, useEffect} from 'react';
import { agregarItem } from "../api/canasta";
import jwtDecode from "jwt-decode";
import {getAccessToken} from "../api/auth";
import useAuth from '../hooks/useAuth';
import Logo from "../assets/images/Logo.png";
import {buscarAnuncios, infoAnuncio} from "../api/buscar";
import {starRating} from "../api/reviews";

 const ModalAnuncio = (props) => {

  const anuncio = props.anuncio
  const anuncioUserId = props.id

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const{user, isLoading} = useAuth();

  let countReviews = 0;

  const [data, setData] = useState({
    userId: null, 
    postId: null
  });

  const handleClose = () => {
    setShow(false);
    setShow2(false);
    setShow3(false);
  }
  const handleShow = () => {
      if(!user && !isLoading){
          setShow2(true);
      } else {
          cambiarData()
          setShow(true);
      }
  }
  const handleLogin = () => window.location.href = "./login";

  const agregarAlCarrito = async e =>{
    e.preventDefault();
    if (anuncioUserId === data.userId){
        setShow(false);
        setShow3(true);
    } else {
        const result = await agregarItem(data);
        setShow(false);
    }
  }

  function cambiarData(){
    setData({
      userId: jwtDecode(getAccessToken()).sub.id,
      postId: anuncio.id
    })
  }

  const adminRating = (num) => {
     return <p className="stars">{starRating(num)}</p>
  }

  const [info, setInfo] = useState([]);

  useEffect(() => {
      infoAnuncio(anuncio.id).then(response => {
          setInfo(response);
      })
  }, []);

     function printReview(postInfo,index){
         if (postInfo.fn === null){
             countReviews++;
         } else {
             return (
                 <div className="d-flex align-items-center">
                     <p className="me-4"><b>{postInfo.fn}</b> dice:</p>
                     {adminRating(postInfo.reviewRating)}
                     <p className="ms-3">{postInfo.reviewContent}</p>
                 </div>
             )
         }
     }

     function sinReviews(len){
         if (countReviews === len){
             return (
                 <p>No hay reseñas para esta publicación.</p>
             )
         }
     }

    return(
      <>
      <Button className="btn btn-primary fw-bold float-end" onClick={handleShow}>
          Saber más »
      </Button>

      <Modal className="login" backdrop="static" keyboard={false} centered size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title className="text-white fw-bold">
              <i className="bi bi-shop me-4"> </i>
              {anuncio.postTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="b-white text-center">
            <svg
                className="bd-placeholder-img rounded" width="100%" height="50vh" role="img">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#eee"></rect>
                <text x="50%" y="50%" fill="#aaa" dy=".3em">Imagen</text>
            </svg>

            <div className="d-flex">
                <div className="mt-3 col">
                    <div className="d-flex justify-content-center align-items-center">
                        <svg
                            className="bd-placeholder-img rounded-circle" width="100" height="100" role="img">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#eee"></rect>
                            <text x="50%" y="50%" fill="#aaa" dy=".3em">Imagen</text>
                        </svg>
                        <div>
                            {
                                info.slice(0,1).map((postInfo)=>(
                                    <a className="ms-3 big-badge">
                                        {postInfo.firstName + " " + postInfo.lastName}
                                    </a>
                                ))
                            }
                        </div>
                    </div>

                    <h5 className="welcome1 mt-4 fw-bold">Detalles</h5>
                        <p className="w-75 mx-auto">
                            {anuncio.postDescription}
                        </p>
                </div>
                <div className="mt-3 col">
                    <h4 className="welcome2 fw-bold">
                        Precio: ${anuncio.postPrice}
                    </h4>

                    <h5 className="welcome1 my-4 fw-bold">Reseñas de otros usuarios</h5>
                    <div>
                        {
                            info.map((postInfo,index)=>(
                                printReview(postInfo,index)
                            ))
                        }
                        {
                            sinReviews(info.length)
                        }
                    </div>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer className="b-white">
          <button className="btn3 rounded fw-bold" onClick={handleClose}>
            Cerrar
          </button>
          <button className="btn btn-primary fw-bold" onClick={agregarAlCarrito}>
              <i className="bi bi-cart-plus-fill"></i> Añadir al carrito
          </button>
        </Modal.Footer>
      </Modal>

          <Modal id="modal" className="login" show={show2} backdrop="static" keyboard={false} centered onHide={handleClose}>
              <Modal.Header closeButton closeVariant="white">
                  <Modal.Title className="text-white fw-bold">
                      <i className="bi bi-info-circle"> </i>
                      Acceso Restringido
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body className="b-white text-center">
                  <h5>Para ver los detalles de este anuncio es necesario
                      que inicies sesión en tu cuenta.</h5>
                  <img className="logo mb-4 mt-3" src={Logo} alt="PayPhone"/>
                  <h5>¿Deseas continuar?</h5>
              </Modal.Body>
              <Modal.Footer className="b-white">
                  <button className="btn3 rounded fw-bold" onClick={handleClose}>
                      No, regrésame
                  </button>
                  <button className="btn btn-primary fw-bold float-end" onClick={handleLogin}>
                      ¡Sí, vamos!
                  </button>
              </Modal.Footer>
          </Modal>

          <Modal id="modal" className="login" show={show3} backdrop="static" keyboard={false} centered onHide={handleClose}>
              <Modal.Header closeButton closeVariant="white">
                  <Modal.Title className="text-white fw-bold">
                      <i className="bi bi-info-circle"> </i>
                      Acceso Restringido
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body className="b-white text-center">
                  <h5>Parece que estás tratando de adquirir uno de tus propios productos o servicios.
                  Esta acción no está permitida.</h5>
                  <img className="logo mb-4 mt-3" src={Logo} alt="PayPhone"/>
              </Modal.Body>
              <Modal.Footer className="b-white">
                  <button className="btn btn-primary fw-bold float-end" onClick={handleClose}>
                      Entendido
                  </button>
              </Modal.Footer>
          </Modal>
    </>
      )
  }

  export default ModalAnuncio



