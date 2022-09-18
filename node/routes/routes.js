import express from "express";
import { getAllUusuarios } from "../controllers/PPController.js";

const router = express.Router()

router.get('/',getAllUusuarios)

export default router