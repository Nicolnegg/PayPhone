import express from "express";

import * as ctrUser from "../controllers/PPController.js";
import * as menuUser from "../controllers/MenuGeneralController.js";

const router = express.Router();


router.post("/registro", ctrUser.crearCuenta)
router.post("/login", ctrUser.verificarUsuario)
router.get("/menu", menuUser.consultarEstablecimiento)

export default router;