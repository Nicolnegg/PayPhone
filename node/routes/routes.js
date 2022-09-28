import express from "express";

import * as ctrUser from "../controllers/PPController.js";

const router = express.Router();


router.post("/registro", ctrUser.crearCuenta)
router.post("/login", ctrUser.crearCuenta)

export default router;