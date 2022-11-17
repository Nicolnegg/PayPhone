//importamos coneccion base de datos
import db from '../database/db.js';
//importamos sequeliza
import { DataTypes } from 'sequelize';

const Producto= db.sequelize.define('producto',{
    producto_id:{ type:DataTypes.NUMBER},
    punto_atencion_id: { type: DataTypes.NUMBER },
    nombre: { type: DataTypes.STRING },
    precio_venta: { type: DataTypes.DOUBLE },
    cantidad: { type: DataTypes.INTEGER },
    imagen: { type: DataTypes.STRING },
    categoria: { type: DataTypes.INTEGER },
    activo: { type: DataTypes.TINYINT },
})

export default Producto