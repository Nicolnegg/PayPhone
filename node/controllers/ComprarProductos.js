import connection from "../database/db.js";

export async function compraProductos(req, res) {
    const usuario_id = req.body.usuario_id;
    var total = 0;

    connection.query('SELECT P.nombre, P.precio_venta, C.cantidad FROM carrito C, producto P WHERE C.usuario_id = ? AND P.producto_id = C.producto_id', [usuario_id], async (error, results) => {
        if(results){
            for(var j = 0; j < Object.keys(results).length; j++) {
                total += results[j].precio_venta*results[j].cantidadP;
            }
            res.json(total);
        }
        else{
            res.json(total);
        }
        
    })
}
