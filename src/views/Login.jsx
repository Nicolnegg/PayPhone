import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TOKEN } from "../utils/tokens";
import Logo from "../assets/images/Logo.png";
import Background from "../assets/images/fondo.png";
import { showHide } from "../utils/passwordVisibility";
import jwtDecode from "jwt-decode";
import ModalError from "../components/ModalError";
import { axios } from "../libs/axios";
import useAuth from "../hooks/useAuth";
import { logout } from "../api/auth";



function Login() {

  logout();
  navigate('/login');
  const navigate = useNavigate();
  const { checkSession } = useAuth();
  const [error, setError] = useState(null);

  const style = {
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center center",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    width: "100vw",
    height: "100vh",
  };

  const [inputs, setInputs] = useState({
    correo: "",
    contrasenia: "",
  });

  const changeForm = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const login = async (e) => {
    e.preventDefault();
    setError(null);

    const { data: res } = await axios.post("/login", inputs);
    const { msj: msg, data } = res;

    if (!data) {
      return setError(msg);
    }

    const free = jwtDecode(data.token);
    localStorage.setItem(TOKEN, data.token);
    checkSession();

    if (free.isAdmin) {
      navigate("/adminn");
    } else {
      navigate("/usuario/eleccionSupermercado");
    }
  };

  return (
    <div className="login text-center d-flex" style={style}>
      <div
        className="form-signin rounded max-w-log my-auto"
        onChange={changeForm}
        onSubmit={login}
      >
        <form>
          <img className="w-50 mb-4 mt-2" src={Logo} alt="PayPhone" />
          <h5 className=" welcome mb-3 fw-bold">¡Te damos la bienvenida!</h5>
          <div className="form-floating w-75 mx-auto mt-4">
            <input
              type="email"
              className="form-control mb-3"
              id="email"
              name="correo"
              placeholder="username"
            />
            <label htmlFor="email">Correo electrónico</label>
          </div>
          <div className="form-floating w-75 mx-auto">
            <input
              type="password"
              className="form-control mb-3"
              id="password"
              name="contrasenia"
              placeholder="Password"
            />
            <label htmlFor="password">Contraseña</label>
            <i
              className="bi bi-eye-slash-fill form-icon"
              onClick={(e) => showHide(e.target)}
            >
              {" "}
            </i>
          </div>
          <div className="h3 mb-3 fw-normal">
            <Link to="/clave/recuperar" className="badge mt-2 mb-2">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          <button
            className="w-75 btn btn-lg btn-primary fw-bold mx-auto"
            type="submit"
          >
            Ingresar
          </button>
        </form>

        <div className="h3 mb-3 fw-normal">
          <Link to="/google" className="badge mb=2">
            <button className="btn btn-lg btn-primary" type="submit">
              <i class="bi bi-google"></i>
            </button>
          </Link>
        </div>

        <div className="h3 mb-3 fw-normal">
          <p>
            ¿No tienes cuenta?
            <a href="/registro" className="badge mt-1">
              Regístrate
            </a>
          </p>
        </div>

        <div className="h3 mb-2 fw-normal">
          <a href="/" className="mid-badge mt-2">
            <i className="bi bi-house-door-fill"></i>
          </a>
        </div>
      </div>
      <ModalError error={error} />
    </div>
  );
}

export default Login;
