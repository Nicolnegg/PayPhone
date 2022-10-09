//importamos coneccion base de datos
import db from '../database/db.js';
//importamos sequeliza
import { DataTypes } from 'sequelize';

const UsuariosModel= db.define('usuarios',{
    cedula:{ type:DataTypes.NUMBER},
    id_metodo: { type: DataTypes.NUMBER },
    nombre: { type: DataTypes.STRING },
    apellido: { type: DataTypes.STRING },
    correo: { type: DataTypes.STRING },
    contraseña: { type: DataTypes.STRING },
    fecha_nacimiento: { type: DataTypes.STRING },
})

export default UsuariosModel