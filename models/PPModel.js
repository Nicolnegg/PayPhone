//importamos coneccion base de datos
import db from '../database/db.js';
//importamos seqeuliza
import { Sequelize, DataTypes } from 'sequelize';
//importamos sequeliza
import { DataTypes } from 'sequelize';



const UsuariosGoogle = db.sequelize.define('usuario', {
    cedula: { type: DataTypes.NUMBER },
    metodo_pago_id: { type: DataTypes.NUMBER },
    nombre: { type: DataTypes.STRING },
    apellido: { type: DataTypes.STRING },
    correo: { type: DataTypes.STRING },
    contrasenia: { type: DataTypes.STRING },
    fecha_nacimiento: { type: DataTypes.STRING },
    strike: { type: DataTypes.NUMBER },
    activo: { type: DataTypes.NUMBER },
})

export default UsuariosGoogle