import React, { Component } from 'react'
export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Registrarse</h3>
        <div className="mb-3">
          <label>Primer nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="Primer nombre"
          />
        </div>
        <div className="mb-3">
          <label>Apellido</label>
          <input type="text" className="form-control" placeholder="Apellido" />
        </div>
        <div className="mb-3">
          <label>Correo electronico</label>
          <input
            type="correo"
            className="form-control"
            placeholder="Ingresar correo"
          />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="contraseña"
            className="form-control"
            placeholder="Ingresar contraseña"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Registrarse
          </button>
        </div>
        <p className="forgot-password text-right">
          Ya estas registrado <a href="/sign-in">Iniciar sesión?</a>
        </p>
      </form>
    )
  }
}