import connection from "../database/db.js";

export async function agregarProducto(req, res){
    try {
        const nombre = req.body.nombre;
        const precio_venta = req.body.precio_venta;
        const cantidad = req.body.cantidad;
        const imagen = req.body.imagen;
        const categoria = req.body.categoria;
        connection.query('SELECT * FROM producto WHERE nombre = ? ', [nombre], async (error, results) => {
            //revisar que el nombre sea diferente o si no ya creo el producto
            if (results[0] == null) {
                //revisat id punto de atencion PREGUNTAR DIEGO
                connection.query('INSERT INTO producto SET ?', { punto_atencion_id: xxxxxxxxxx, nombre: nombre, precio_venta: precio_venta, cantidad: cantidad, imagen: imagen, categoria: categoria},
                        async (error, results) => {
                            if (error) {
                                console.log(error);
                                res.json({ isOK: false, msj: "Producto almacenado de forma INCORRECTA" })
                            } else {
                                res.json({ isOK: true, msj: "Producto almacenado de forma correcta" })                                
                            }
                        })
            }
            else{
                res.json({ isOK: false, msj: "nombre ya usado, producto ya existente, registro NO VALIDO" })
            }

        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export async function consultarCategorias(req,res){
    try {
        connection.query('SELECT * FROM categoria', async (error, results) => {
                if (error) {
                    res.json({ error })
                } else {
                    res.json({ isOK: true, msj: "Producto almacenado de forma correcta" })
                }
            })
    } catch (error) {
        
    }
}