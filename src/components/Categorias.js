import {React, useState, useEffect} from 'react'
import { buscarCategoria } from '../api/buscar';
import Table from 'react-bootstrap/Table';
import { idCategoria, nombreCategoria } from '../utils/tokens';
import useAuth from '../hooks/useAuth';
import {Button, Modal} from "react-bootstrap";
import Logo from "../assets/images/Logo.png";
import Audio from "../assets/images/Categorias/Audio.jpg"


export const Categorias = () => {
  const[category, setCategory] = useState([])

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogin = () => window.location.href = "./productos";

  useEffect(() => {
    buscarCategoria().then(response => {
      setCategory(response);
    })
  }, [])

  const{user, isLoading} = useAuth();

  function mostrar(category){
      if(!user && !isLoading){
          handleShow()
      }
      else {
          localStorage.setItem(idCategoria, category.id);
          localStorage.setItem(nombreCategoria, category.categoryName);
          window.location.href = "./buscarcategoria";
      }
    }

    function imagen(categoryName) {
      switch (categoryName) {
          case "Audio":
          return <img src={Audio} alt="Imagen" width="160" height="90"/>
          break;
        default:
          return (
          <svg
              className="bd-placeholder-img rounded" width="160" height="90" role="img">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee"></rect>
              <text x="50%" y="50%" fill="#aaa" dy=".3em">Categoría</text>
          </svg>)
          break;
      }

    }

    console.log(category)


  const tableRows=category.map((category)=>{
        return(
          <tr>
              <td>
              {imagen(category.categoryName)}
              </td>
            <td className="text-center">
              {category.categoryName}
            </td>
            <td>
              <button className="btn btn-primary fw-bold float-end" onClick={() => (mostrar(category))}>Saber más »</button>
            </td>
          </tr>
        )
    }
)

  return(
    <div>
      <p className="text-center mb-3">Aquí podrás navegar entre todas las categorías disponibles para encontrar productos y servicios afines con tus intereses.</p>
      <Table className="align-middle" hover>
          <thead className="text-center">
            <tr className="table-primary welcome">
                <th></th>
              <th>Categoría</th>
                <th></th>
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </Table>
        <Modal id="modal" className="login" show={show} backdrop="static" keyboard={false} centered onHide={handleClose}>
            <Modal.Header closeButton closeVariant="white">
                <Modal.Title className="text-white fw-bold">
                    <i className="bi bi-info-circle"> </i>
                    Acceso Restringido
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="b-white text-center">
                <h5>Para acceder a las categorías es necesario
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
    </div>
)
}

