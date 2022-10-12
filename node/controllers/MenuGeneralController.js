import connection from "../database/db.js";

export async function consultarEstablecimiento(req, res) {
    try{
        connection.query('SELECT nombre, logo FROM establecimiento', async (error, results) => {
            console.log(Object.keys(results).length);
            if (Object.keys(results).length == 0){
                
                res.json({ isOK: false, msj: "consulta incorrecta" })
            }else{
                res.json({ isOK: true, msj: "Menú correcto" })
            }
        })
    } catch(error) {
        res.json({ message: error.message })
    }

}