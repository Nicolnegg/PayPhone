//importamos coneccion base de datos
import db from '../database/db.js';
//importamos seqeuliza
import { DataTypes } from 'sequelize';

const UsuariosModel= db.define('usuarios',{
    cedula:{ type:DataTypes.NUMBER},
    id_metodo: { type: DataTypes.NUMBER },
    nombre: { type: DataTypes.STRING },
})

export default UsuariosModel