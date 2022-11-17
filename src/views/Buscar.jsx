import { React, useState } from "react"
import  {Categorias}  from "../components/Categorias"
import {Admin} from "../components/Admin"

const Buscar = () => {

  const[activo, setActivo] = useState("Categorias")

  const selection = () => {
      if(activo === 'Categorias'){
          return (<Categorias/>)
      }
      else if(activo === 'Admin') {
          return (<Admin/>)
      }
  }
    return (
      <div className='contenedorPerfil container d-flex' >
        <div className="container w-100">
            <h5 className="text-center welcome mb-3 fw-bold mt-1 mb-1">Selecciona una de las siguientes opciones:</h5>
            <nav className="text-center mb-4 fw-bold w-100 d-flex">
              <button className="btn2 rounded btn-primary fw-bold mx-auto" onClick={()=>setActivo("Categorias")}>Categorías</button>
              <button className="btn2 rounded btn-primary fw-bold mx-auto" onClick={()=>setActivo("Admin")}>Admin</button>
            </nav>
            {selection()}
        </div>
      </div>
      )
}

export default Buscar