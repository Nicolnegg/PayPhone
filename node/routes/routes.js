import express from "express";
import passport from "passport";

import * as ctrUser from "../controllers/PPController.js";
import * as menuUser from "../controllers/MenuGeneralController.js";
import * as carritoUser from "../controllers/CarritoUsuario.js";
import * as productoUser from "../controllers/ProductoUsuario.js";

const router = express.Router();


router.post("/registro", ctrUser.crearCuenta)
router.post("/login", ctrUser.verificarUsuario,)
router.get("/google", passport.authenticate('google',{
    scope: ['profile']
}))  // vemos todos los perfiles de google
router.get("/google/redirect", passport.authenticate('google'), (req, res) =>{res.send('estoo')} )
router.get("/carrito-pago", ctrUser.pago_despues_carrito)
router.get("/menu", menuUser.consultarEstablecimiento)
router.get("/submenu", menuUser.consultarPAEstablecimiento)
router.get('/logout',function(req,res){
    req.session.destroy();
})
router.get("/carrito", carritoUser.productosCarrito)
router.get("/productos", productoUser.productosMenu)

export default router;