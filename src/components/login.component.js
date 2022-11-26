import React, { useState,useEffect } from 'react'
import { useNavigate} from 'react-router-dom'

const URI = 'https://payphonecol.herokuapp.com/login'

const Login = () => {
  const [correo, setCorreo] = useState ('');
  const [contrasenia, setContrasenia] = useState('');
  const navigate = useNavigate();
  useEffect ( () => {
    const auth = localStorage.getItem('user');
    if(auth) {
      navigate('./')
    }

  },[])
  //procedimientos
  const handleLog = async () => {
    let result = await fetch (URI , {
      method : 'post',
      body: JSON.stringify({correo,contrasenia}),
      headers: {
        'Content-Type' : 'application/json'
      }
    });
    
    result =await  result.json()
    console.warn(result)
    if(result.name){
      localStorage.setItem('user', JSON.stringify(result));
      navigate("./") 
      alert("Datos leidos correctamente")
    }else{
      alert("Datos leidos correctamente")
    }

  }

  return (
    <form>
      <h3>Iniciar sesión</h3>
      <div className="mb-3">
        <label>Correo</label>
        <input
          type="usuario"
          className="form-control"
          placeholder="Ingresa usuario"
          onChange={(e) => setCorreo(e.target.value)} value = {correo}

        />
      </div>
      <div className="mb-3">
        <label>Contraseña</label>
        <input
          type="contraseña"
          className="form-control"
          placeholder="Ingresa la contraseña"
          onChange={(e) => setContrasenia(e.target.value)} value={contrasenia}
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Recuerdame
          </label>
        </div>
      </div>
      <div className="d-grid">
        <button onClick={handleLog} type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        Olvidaste la <a href="#">contraseña?</a>
      </p>
    </form>
  )

}


export default Login