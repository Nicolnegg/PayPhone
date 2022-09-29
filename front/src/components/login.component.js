import React, { Component } from 'react'


export default class Login extends Component {
  render() {
    return (
      <form>
        <h3>Iniciar sesión</h3>
        <div className="mb-3">
          <label>Cuenta de usuario</label>
          <input
            type="usuario"
            className="form-control"
            placeholder="Ingresa usuario"
          />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="contraseña"
            className="form-control"
            placeholder="Ingresa la contraseña"
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Olvidaste la <a href="#">contraseña?</a>
        </p>
      </form>
    )
  }
}