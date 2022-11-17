import connection from "../database/db.js";

export async function productosMenu(req, res) {
    try{
        const punto_atencion_id = req.body.punto_atencion_id;

        connection.query('SELECT nombre, precio_venta, cantidad, imagen FROM producto WHERE activo = 1 AND punto_atencion_id = ?', [punto_atencion_id], async (error, results) => {
            if (results == null){
                res.json({ error })
            }else{
                res.json({ results })
            }
        })
    } catch(error) {
        res.json({ message: error.message })
    }
}

export async function productosMenu(req, res) {
    try{
        const punto_atencion_id = req.body.punto_atencion_id;

        connection.query('SELECT nombre, precio_venta, cantidad, imagen FROM producto WHERE activo = 1 AND punto_atencion_id = ?', [punto_atencion_id], async (error, results) => {
            if (results == null){
                res.json({ error })
            }else{
                res.json({ results })
            }
        })
    } catch(error) {
        res.json({ message: error.message })
    }
}

export async function filtroProductos(req,res){
    try {
        const filtro = req.body.filtro;
    } catch (error) {
        
    }
}