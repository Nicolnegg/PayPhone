import React , {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const URI = 'https://payphonecol.herokuapp.com/registro'

const SignUp = () => {
  const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [confirmacionClave, setConfirmacionClave] = useState('');
  const [fecha_nacimiento, setFecha_nacimiento] = useState('');

  const navigate = useNavigate()

  //Guardado proceso
  const store = async (e) => {
    e.preventDefault()
    await axios.post(URI, { cedula: cedula, nombre: nombre, apellido: apellido, correo: correo, contrasenia: contrasenia, confirmacionClave: confirmacionClave, fecha_nacimiento: fecha_nacimiento })
    alert("Datos leidos correctamente y Almacenado Correctamente")
    navigate('/')
  }

  return (
    <form onSubmit={store}>
      <h3>Registrarse</h3>
      <div className="mb-3">
        <label>Cedula</label>
        <input
          type="text"
          className="form-control"
          placeholder="Primer nombre"
          value={cedula}
          onChange={(e) => setCedula(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Primer nombre</label>
        <input
          type="text"
          className="form-control"
          placeholder="Primer nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)} 
        />
      </div>
      <div className="mb-3">
        <label>Apellido</label>
        <input type="text" className="form-control" placeholder="Apellido" 
          value={apellido}
          onChange={(e) => setApellido(e.target.value)} 
        />
      </div>
      <div className="mb-3">
        <label>Correo electronico</label>
        <input
          type="correo"
          className="form-control"
          placeholder="Ingresar correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)} 
        />
      </div>
      <div className="mb-3">
        <label>Contraseña</label>
        <input
          type="contraseña"
          className="form-control"
          placeholder="Ingresar contraseña"
          value={contrasenia}
          onChange={(e) => setContrasenia(e.target.value)} 
        />
      </div>
      <div className="mb-3">
        <label>Confirmacion Contraseña</label>
        <input
          type="contraseña"
          className="form-control"
          placeholder="Ingresar contraseña"
          value={confirmacionClave}
          onChange={(e) => setConfirmacionClave(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Fecha Nacimiento</label>
        <input
          type="date"
          className="form-control"
          placeholder="Ingresar contraseña"
          value={fecha_nacimiento}
          onChange={(e) => setFecha_nacimiento(e.target.value)}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary" >
          Registrarse
        </button>
      </div>
      <p className="forgot-password text-right">
        Ya estas registrado <a href="/sign-in">Iniciar sesión?</a>
      </p>
    </form>
  )

}

export default SignUp