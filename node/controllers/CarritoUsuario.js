import connection from "../database/db.js";

export async function getCarrito(req, res){
    const usuario_id = req.body.usuario_id;
    var total = 0;

    connection.query('SELECT P.nombre, P.precio_venta, C.cantidad FROM carrito C, producto P WHERE C.usuario_id = ? AND P.producto_id = C.producto_id', [usuario_id], async (error, results) => {
        if(results){
            for(var j = 0; j < Object.keys(results).length; j++) {
                total += results[j].precio_venta*results[j].cantidadP;
            }
            res.json({ results,total});
        }
        else{
            console.log('nada en el carro');
            res.json({ isOK: false, msj: "Nada en el carro" });
        }
        
    })
    
}

export async function agregarCarrito(req, res) {
    console.log("agregando producto al carrito")
    try {
        const usuario_id = usuario_id;
        const producto_id = req.body.producto_id;
        const cantidad = req.body.cantidad;

        connection.query('INSERT INTO carrito SET ?', { usuario_id: usuario_id, producto_id: producto_id, cantidad: cantidad },
            async (error, results) => {
                if (error) {
                    console.log(error);
                    res.json({ isOK: false, msj: "Producto almacenado de forma INCORRECTA" })
                } else {
                    res.json({ isOK: true, msj: "Producto almacenado de forma correcta" })
                }
            })
    } catch (error) {
        res.json({ message: error.message })
    }

}


