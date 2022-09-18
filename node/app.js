import express from "express";
import cors from 'cors'
import db from "./database/db.js"

import appRoutes from './routes/routes.js'

const app= express()

app.use( cors() )
app.use(express.json())
app.use('/usuarios', appRoutes)

try{
    await db.authenticate()
    console.log('Conexion Exitosa a la base de datos')
}catch(error){
    console.log('Conexion error a la base de datos es: ${error}' )
}

app.get('/', (req,res)=>{
    res.send('Hola MUndo')
})

app.listen(8000,()=>{
    console.log('Server UP running in http://localhost:8000')
})
