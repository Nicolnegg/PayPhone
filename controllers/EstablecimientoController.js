import connection from "../database/db.js";

//lista de estableciemientos a acepatarlos establecimeintos
export async function AceptarEstableciemiento(req, res){
    try {
        connection.query('SELECT * FROM administrador WHERE activo = 0 ', function (error, results) {
            if (error)
                throw error;
       
            results.forEach(result => {
                connection.query('SELECT * FROM establecimiento WHERE nit = ? ', [result.establecimiento_nit], async (error, resultados) => {
                    if (error)
                        throw error;

                    resultados.forEach(resulta => {
                        console.log(resulta);
                    });
                    res.json({isOK: true, msj: "Lista terminada"})
                });
            });

        });        
        
    } catch (error) {
        res.json({message: error.messaje})
    }
}

export const ActivarEstableciemiento = (req,res) =>{ //necesita ser enviado el nit del establecimiento
    try {
        connection.query('SELECT * FROM administrador WHERE establecimiento_nit = ? ', [req.body.nit], async (error, resultados) =>  {
            connection.query('UPDATE administrador SET activo = 1 WHERE establecimiento_nit = ? ', [resultados[0].establecimiento_nit], async (error, results) => {
                connection.query('UPDATE establecimiento SET activo = 1 WHERE establecimiento_nit = ? ', [resultados[0].establecimiento_nit], async (error, results) => {
                    connection.query('UPDATE usuario SET activo = 1 WHERE usuario_id = ? ', [resultados[0].usuario_id], async (error, results) => {
                        res.json({"message": "Activado EXITOSAMENTE"})
                    })
                })
            })
        })
        
        
    } catch (error) {
        res.json({message: error.messaje})
    }
}