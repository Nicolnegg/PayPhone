import connection from "../database/db.js";

export async function productosCarrito(req, res){
    console.log(req.session)
    console.log(req.session.passport.user.cedula)
    connection.query('SELECT * FROM carrito WHERE cedula = ? ', [req.session.passport.user.cedula], async (error, results) => {
        if(results){
            for (var i = 0; i < Object.keys(results).length; i++) {
                connection.query('SELECT * FROM producto WHERE producto_id = ? ', [results[i].ID_producto], async (error, resultados) => {

                })
            }

        }else{
            console.log('nada en el carro')
        }
        
    })
}
