import {React, useState} from 'react'
import { buscarAdminPorPalabra } from '../../api/buscar';
import Table from 'react-bootstrap/Table';
import ModalAdmin from '../ModalAdmin';
import {starRating} from "../../api/reviews";

const BusquedaAdmin = (props) => {

    const admin = props.admin

    const [input, setInput] = useState({
        buscar: ""
      });
    
      const [resultado, setResultado] = useState()
    
      const changeForm = e => {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        });
      };
    
      const buscarPalabra = async e =>{
        e.preventDefault();
        const resultadoBusqueda = await buscarAdminPorPalabra(input.buscar);
        setResultado(resultadoBusqueda)
      }

      const adminRating = (num) => {
        return <p className="stars">{starRating(num)}</p>
      }

    const buscaInfo = (info) => {
      if (info === null){
        return (<p>-</p>)
      } else {
        return (<p className="mt-3">{info}</p>)
      }
    }
    
    
      if (!resultado) {
        return(
          <div>
            <p className="text-center mb-3">Aquí podrás conocer a todos los supermercados asociados a la aplicación.</p>
            <div onChange={changeForm} onSubmit={buscarPalabra}>
              <form>
                <div className="d-flex mb-3">
                  <div className="form-floating w-100 me-4">
                    <input
                        type="text"
                        className="form-control"
                        id="buscar"
                        name="buscar"
                        placeholder="buscar"
                    />
                    <label htmlFor="buscar">¿No encuentras lo que necesitas? Búscalo aquí directamente</label>
                  </div>
                  <button className="btn2 rounded btn-primary fw-bold mb-2" type="submit">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </form>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <Table hover>
                <thead>
                  <tr className="table-primary welcome">
                    <th></th>
                    <th>Nombre supermercado</th>
                    <th className="text-center">CEO supermercado</th>
                    <th className="text-center">Puntuación promedio</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="align-middle">
                {
                  admin.map((admin)=>(
                      <tr>
                        <td>
                          <svg
                              className="bd-placeholder-img rounded-circle" width="90" height="90" role="img">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#eee"></rect>
                            <text x="50%" y="50%" fill="#aaa" dy=".3em">Imagen</text>
                          </svg>
                        </td>
                        <td>
                          {admin.firstName + " " + admin.lastName }
                        </td>
                        <td>
                          {buscaInfo(admin.oneliner)}
                        </td>
                        <td className="text-center">
                          {adminRating(admin.adminRating)}
                        </td>

                        <td>
                          <ModalAdmin
                              admin={admin}
                              username={admin.username}
                              firstName={admin.firstName}
                              lastName={admin.lastName}
                              rating={admin.adminRating}
                          />
                        </td>
                      </tr>))
                }
                </tbody>
              </Table>
            </div>
          </div>
        )
      }else{
        return (
          <div>
            <p className="text-center mb-3">Aquí podrás conocer a todos los supermercados asociados a la aplicación.</p>
            <div onChange={changeForm} onSubmit={buscarPalabra}>
              <form>
                <div className="d-flex mb-3">
                  <div className="form-floating w-100 me-4">
                    <input
                        type="text"
                        className="form-control"
                        id="buscar"
                        name="buscar"
                        placeholder="buscar"
                    />
                    <label htmlFor="buscar">¿No encuentras lo que necesitas? Búscalo aquí directamente</label>
                  </div>
                  <button className="btn2 rounded btn-primary fw-bold mb-2" type="submit">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </form>
            </div>
            <Table hover>
              <thead>
                <tr className="table-primary welcome">
                  <th></th>
                  <th>Nombre supermercado</th>
                  <th>CEO supermercado</th>
                  <th className="text-center">Puntuación Promedio</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="align-middle">
                {
                  resultado.map((resultado)=>( 
                  <tr>
                    <td>
                      <svg
                          className="bd-placeholder-img rounded-circle" width="90" height="90" role="img">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#eee"></rect>
                        <text x="50%" y="50%" fill="#aaa" dy=".3em">Imagen</text>
                      </svg>
                    </td>
                    <td>
                      {resultado.User.firstName + " " + resultado.User.lastName}
                      </td>
                      <td>
                        {buscaInfo(resultado.oneliner)}
                      </td>
                      <td className="text-center">
                        {adminRating(resultado.adminRating)}
                      </td>
                    <td>
                      <ModalAdmin
                          admin={resultado}
                          username={resultado.User.username}
                          firstName={resultado.User.firstName}
                          lastName={resultado.User.lastName}
                          rating={resultado.adminRating}
                      />
                    </td>
                  </tr>))
                }
              </tbody>
          </Table>      
        </div>
      )
      }
}

export default BusquedaAdmin
