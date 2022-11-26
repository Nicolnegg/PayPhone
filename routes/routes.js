import express from "express";
import passport from "passport";

import * as ctrUser from "../controllers/PPController.js";
import * as menuUser from "../controllers/MenuGeneralController.js";
import * as carritoUser from "../controllers/CarritoUsuario.js";
import * as productoUser from "../controllers/ProductoUsuario.js";
import * as compraUser from "../controllers/ComprarProductos.js";
import * as UserEmpresa from "../controllers/EmpresaLog.js";
import * as establecimientoAdmin from "../controllers/EstablecimientoController.js";
import * as AdminLogin_Est from "../controllers/AdminRegistroEstable.js";
import * as factura from "../controllers/Factura_electronica.js";
import * as adminProductos from "../controllers/Est_Productos.js";
import * as recomend from "../controllers/RecomendadosP.js";

const router = express.Router();

router.post("/registro", ctrUser.crearCuenta);
router.get("/recuperar-contraseña", ctrUser.recuperarContraseña);
router.post("/login", ctrUser.verificarUsuario);
router.get("/configuracion-usuario/:userId", ctrUser.consultarUsuario);
router.post("/configuracion-usuario", ctrUser.actualizarCuenta);
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
); // vemos todos los perfiles de google
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.redirect("/menu");
  req.session["productos"] = { total: 0 };
  console.log(req.session);
});

router.get("/submenu", menuUser.consultarPAEstablecimiento);
router.get("/logout", function (req, res) {
  req.session.destroy();
});
router.get("/carrito/:userId", carritoUser.getCarrito);
router.post("/agrega-producto", carritoUser.agregarCarrito);
router.get("/carrito-pago", compraUser.compraProductos);
router.get("/menu", menuUser.consultarEstablecimiento);
router.get("/productos/:punto_atencion_id", productoUser.productosMenu);
router.post("/registro-empresa", UserEmpresa.crearCuenta_empresa);
router.post("/registro-establecimiento", UserEmpresa.crear_establecimiento);
router.get(
  "/lista-establecimientos",
  establecimientoAdmin.AceptarEstableciemiento
);
router.post(
  "/activar-establecimientos",
  establecimientoAdmin.ActivarEstableciemiento
);
router.post("/registro-establecimiento", UserEmpresa.crear_establecimiento);

router.post("/Admin-empresa", AdminLogin_Est.crearCuenta_empresa);
router.post("/Admin-establecimiento", AdminLogin_Est.crear_establecimiento);
router.get("/factura-electronica/:userId", factura.generafactura_pdf);
router.post("/crear-PA", adminProductos.agregarPA);
router.get("/recomendados", recomend.top_productos);

export default router;
