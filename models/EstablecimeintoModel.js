import db from '../database/db.js';


import { DataTypes } from 'sequelize';


const establecimientos = db.sequelize.define('establecimiento', {
    nit: { type: DataTypes.NUMBER },
    administador_codigo: { type: DataTypes.NUMBER },
    nombre: { type: DataTypes.STRING },
    logo: { type: DataTypes.STRING },
    rut: { type: DataTypes.NUMBER }
})

export default establecimientos