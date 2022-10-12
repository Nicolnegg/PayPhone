//importamos coneccion base de datos
import db from '../database/db.js';
//importamos sequeliza
import { DataTypes } from 'sequelize';

const EstablecimientoModel= db.define('establecimiento',{
    nit:{ type:DataTypes.NUMBER},
    administrador_codigo: { type: DataTypes.NUMBER },
    nombre: { type: DataTypes.STRING },
    logo: { type: DataTypes.STRING },
    rut: { type: DataTypes.NUMBER },
})

export default EstablecimientoModel