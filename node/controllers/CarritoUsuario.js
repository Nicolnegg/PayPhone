import connection from "../database/db.js";

export async function productosCarrito(req, res){
    connection.query('SELECT * FROM carrito WHERE cedula = ? ', [req.session.user.cedula], async (error, results) => {
        console.log(req.session.user.cedula)
        for (var i = 0; i <Object.keys(results).length ; i++) {
            connection.query('SELECT * FROM producto WHERE producto_id = ? ', [results[i].ID_producto], async (error, resultados) => {
                
            })
          }
    })
}
