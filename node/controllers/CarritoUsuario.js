import connection from "../database/db.js";

export async function productosCarrito(req, res){
    req.session['productos'] = {'total': 0} 
    console.log(req.session)
    req.session['productos'] = {1:{'2productos': ''}} 
    console.log(req.session)
    req.session.productos[2] = { '222productos': '' } 
    const total = 0;
    console.log(req.session)
    console.log(req.session.passport.user.cedula)
    connection.query('SELECT * FROM carrito WHERE cedula = ? ', [req.session.passport.user.cedula], async (error, results) => {
        if(results){
            for (var i = 0; i < Object.keys(results).length; i++) {
                connection.query('SELECT * FROM producto WHERE producto_id = ? ', [results[i].ID_producto], async (error, resultados) => {
                    const foto  = resultados[0].imagen;
                    const nombre = resultados[0].nombre;
                    const precio = resultados[0].precio_venta;
                    total += precio;
                })
            }
        }else{
            console.log('nada en el carro')
        }
        
    })
}

export async function agregarCarrito(req, res) {
    try {
        const usuario_id = req.session.passport.user.usuario_id;
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
        connection.query('SELECT * FROM producto WHERE producto_id = ? ', [producto_id], async (error, resultados) => {
            const foto = resultados[0].imagen;
            const nombre = resultados[0].nombre;
            const precio = resultados[0].precio_venta;
            req.session.productos.total += precio * cantidad;
            req.session.productos[nombre] = { 'nombre': nombre, 'foto': foto, 'precio': precio, 'cantidad': cantidad }
        })
    } catch (error) {
        res.json({ message: error.message })

    }

    

}

export async function getCarrito(req, res) {
    try {
        const productosCarrito = req.session.productos
        res.json(productosCarrito)
    } catch (error) {
        res.json({ message: error.message })

    }
}
