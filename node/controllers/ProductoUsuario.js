import connection from "../database/db.js";

export async function productosMenu(req, res) {
    try{
        const punto_atencion_id = req.body.punto_atencion_id;

        connection.query('SELECT nombre, precio_venta, cantidad, imagen FROM producto WHERE activo = 1 AND punto_atencion_id = ?', [punto_atencion_id], async (error, results) => {
            console.log(Object.keys(results).length);
            if (Object.keys(results).length == 0){
                res.json({ isOK: false, msj: "consulta incorrecta" })
            }else{
                res.json({ isOK: true, msj: "consulta correcto" })
            }
        })
    } catch(error) {
        res.json({ message: error.message })
    }

}