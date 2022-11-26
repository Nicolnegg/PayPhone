import connection from "../database/db.js";

export async function productosMenu(req, res) {
    try{
        const punto_atencion_id = req.params.punto_atencion_id;

        connection.query('SELECT nombre, precio_venta, cantidad, imagen FROM producto WHERE activo = 1 AND punto_atencion_id = ?', [punto_atencion_id], async (error, results) => {
            if (results[0] == null){
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
        if(filtro == ""){
            connection.query('SELECT nombre FROM categoria', async (error1, results2) => {
                if (results2[0] == null){
                    res.json({ error1 })
                }
                else{
                    res.json({ results2 })
                }
            })
        }
        else{
        connection.query('SELECT categoria_id FROM categoria WHERE nombre = ?', [filtro], async (error2, results1) => {
            if (results[0] == null){
                res.json({ error2 })
            }else{
                connection.query('SELECT nombre, precio_venta, cantidad, imagen FROM producto WHERE activo = 1 AND punto_atencion_id = ? AND categoria_id = ?', [punto_atencion_id, results1[0]], async (error, results) => {
                    if (results == null){
                        res.json({ isOK: false, msj: "Este punto de atención no cuenta con productos de la categoria solicitada." })
                    }else{
                        res.json({ results })
                    }
                })
            }
        })
    }

    } catch (error) {
        
    }
}