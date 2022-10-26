import connection from "../database/db.js";

export async function consultarEstablecimiento(req, res) {
    try{
        connection.query('SELECT nit, nombre, logo FROM establecimiento', async (error, results) => {
            console.log(Object.keys(results).length);
            if (Object.keys(results).length == 0){
                
                res.json({ error })
            }else{
                res.json({ results })
            }
        })
    } catch(error) {
        res.json({ message: error.message })
    }

}

export async function consultarPAEstablecimiento(req, res) {
    try{
        const establecimiento_nit = req.body.establecimiento_nit;

        connection.query('SELECT punto_atencion_id, nombre_sede, horario, direccion, ciudad FROM punto_atencion WHERE activo = 1 AND establecimiento_nit = ?', [establecimiento_nit], async (error, results) => {
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