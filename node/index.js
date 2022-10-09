import express from "express";
import dotenv from "dotenv";
import cors from 'cors'
import router from "./routes/routes.js";
import session from "express-session";

import appRoutes from './routes/routes.js';

const app= express();

app.use(express.urlencoded({extended:false}));
app.use( cors() );
app.use(express.json());
app.use('/usuario', appRoutes);

//invocamos dovet

dotenv.config({path:'./.env'});


app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use (router);

app.listen(8000,()=>{
    console.log('Server UP running in http://localhost:8000')
})
