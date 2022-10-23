import express from "express";
import passport from "passport";

import * as ctrUser from "../controllers/PPController.js";
import * as menuUser from "../controllers/MenuGeneralController.js";
import * as carritoUser from "../controllers/CarritoUsuario.js";
import * as productoUser from "../controllers/ProductoUsuario.js";
import * as compraUser from "../controllers/ComprarProductos.js";

const router = express.Router();


router.post("/registro", ctrUser.crearCuenta)
router.post("/login", ctrUser.verificarUsuario,)
router.get("/google", passport.authenticate('google',{
    scope: ['profile']
}))  // vemos todos los perfiles de google
router.get("/google/redirect", passport.authenticate('google'), (req, res) => {
    res.redirect("/menu")
    req.session['productos'] = { 'total': 0 }
    console.log(req.session)
} )

router.get("/submenu", menuUser.consultarPAEstablecimiento)
router.get('/logout',function(req,res){
    req.session.destroy();
})
router.get("/carrito", carritoUser.getCarrito)
router.get("/carrito-pago", compraUser.compraProductos)
router.get("/menu", menuUser.consultarEstablecimiento)
router.get("/productos", productoUser.productosMenu)

export default router;