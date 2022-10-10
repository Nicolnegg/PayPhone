import express from "express";
import passport from "passport";

import * as ctrUser from "../controllers/PPController.js";

const router = express.Router();


router.post("/registro", ctrUser.crearCuenta)
router.post("/login", ctrUser.verificarUsuario)
router.get("/google", passport.authenticate('google',{
    scope: ['profile']
}))  // vemos todos los perfiles de google
router.get("/google/redirect", passport.authenticate('google'), (req, res) =>{res.send('estoo')} )
router.get("/carrito-pago", ctrUser.pago_despues_carrito)

export default router;