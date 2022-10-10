//importamos coneccion base de datos
import db from '../database/db.js';
<<<<<<< HEAD
//importamos seqeuliza
import { Sequelize, DataTypes } from 'sequelize';
=======
//importamos sequeliza
import { DataTypes } from 'sequelize';
>>>>>>> ee2356e5de5a88c9c47a9cfdbc534eec5650f931



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