//importamos coneccion base de datos
import db from '../database/db.js';
//importamos sequeliza
import { DataTypes } from 'sequelize';

const Categoria= db.sequelize.define('categoria',{
    categoria_id:{ type:DataTypes.NUMBER},
    nombre: { type: DataTypes.STRING },
})

export default Categoria