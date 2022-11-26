import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { logout } from "../api/auth";
import MenuBackground from "../assets/images/menu-lat.png";
import Logo from "../assets/images/Logo.png";
import exito from "../assets/images/exito.png";

function Sidebar(props) {
  const style = {
    backgroundImage: `url(${MenuBackground})`,
    backgroundPosition: "left bottom",
    backgroundSize: "270px 100%",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  const logoutUser = () => {
    logout();
    window.location.reload();
  };

  const { Sider } = Layout;
  const rol = props.rol;

  let defaultKeys;
  if (rol === "/") defaultKeys = "1";
  else defaultKeys = "2";

  function anuncio(rol) {
    if (rol === "/adminn")
      return (
        <>
          <div className="top mt-3">
          <Menu.Item key="1">
            <Link to={rol}>
              <img
                className="logo d-flex justify-content-center"
                src={exito}
                alt="Exito"
              />
            </Link>
          </Menu.Item>
          </div>
          <Menu.Item key="2">
            <Link to="../misVentas">
              <span>
                <i className="bi bi-cash-coin me-3"> </i>
                Mis ventas
              </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="../eleccionSupermercado">
              <span>
                <i class="bi bi-arrow-right-circle-fill me-3"></i>
                Elección de supermercado
              </span>
            </Link>
          </Menu.Item>
        </>
      );
    else return null;
  }

  function buildMenu(rol) {
    if (rol === "/")
      return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[defaultKeys]}>
          <Menu.Item key="1">
            <Link to="/">
              <span>
                <i className="bi bi-search me-3"> </i>
                Buscar
              </span>
            </Link>
          </Menu.Item>
          <div className="text-center">
            <span>
              ¿Quieres comprar los productos en los supermercados que se
              encuentran en la parte derecha? ¡Inicia Sesión!
            </span>
          </div>
          <Menu.Item className="mt-4" key="2">
            <Link to="/informacionExtra">
              <span>
                <i className="bi bi-info-circle me-3"> </i>
                Más información
              </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="../eleccionSupermercado">
              <span>
                <i class="bi bi-arrow-right-circle-fill me-3"></i>
                Elección de supermercado
              </span>
            </Link>
          </Menu.Item>
        </Menu>
      );
    else
      return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[defaultKeys]}>
          <div className="top mt-3">
            <Link to={rol}>
              <img
                className="logo d-flex justify-content-center"
                src={exito}
                alt="Exito"
              />
            </Link>
          </div>

          <Menu.Item key="1">
            <Link to="../Productos">
              <span>Éxito</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="../buscar">
              <span>
                <i className="bi bi-search me-3"> </i>
                Buscar
              </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="../Usuario/productos">
              <span>
                <i className="bi bi-patch-check-fill me-3"> </i>
                Todos los productos
              </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="../perfil">
              <span>
                <i className="bi bi-person-fill me-3"> </i>
                Mi perfil
              </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="../ordenes">
              <span>
                <i className="bi bi-card-list me-3"> </i>
                Mis órdenes
              </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="../recomendaciones">
              <span>
                <i className="bi bi-bookmark-heart-fill me-3"> </i>
                Recomendados
              </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="7">
            <Link to="../carrito">
              <span>
                <i className="bi bi-cart-dash-fill me-3"> </i>
                Mi carrito
              </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="8">
            <Link to="../eleccionSupermercado">
              <span>
                <i class="bi bi-arrow-right-circle-fill me-3"></i>
                Elección de supermercado
              </span>
            </Link>
          </Menu.Item>
          {anuncio(rol)}
        </Menu>
      );
  }

  function buildBottom(rol) {
    if (rol === "/")
      return (
        <ul className="visitante">
          <li>
            <Link to="/login">
              <span>
                <i className="bi bi-door-open-fill me-3 mb-0"> </i>
                Iniciar Sesión
              </span>
            </Link>
          </li>
          <hr />
          <li>
            <Link to="/registro">
              <span>
                Registrarse
                <i className="bi bi-person-plus-fill ms-5"> </i>
              </span>
            </Link>
          </li>
        </ul>
      );
    else
      return (
        <ul className={rol.substring(1)}>
          <li>
            <Link to="../informacionExtra">
              <span>
                <i className="bi bi-info-circle-fill me-4"></i>
                Acerca de nosotros
              </span>
            </Link>
          </li>
          <li className="mt-2">
            <span onClick={logoutUser}>
              <i className="bi bi-arrow-left-square-fill me-3"> </i>
              Salir
            </span>
          </li>
        </ul>
      );
  }

  return (
    <Sider className="sidebar" style={style}>
      <div className="top mt-3">
        <Link to={rol}>
          <img
            className="logo d-flex justify-content-center"
            src={Logo}
            alt="PayPhone"
          />
        </Link>
      </div>

      <div className="center mt-5">{buildMenu(rol)}</div>
      <div className="bottom mt-auto">{buildBottom(rol)}</div>
    </Sider>
  );
}

export default Sidebar;
