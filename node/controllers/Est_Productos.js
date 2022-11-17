import connection from "../database/db.js";

export async function agregarProduct(req, res){
    try {
        const nombre = req.body.nombre;
        const punto_atencion_id = req.body.punto_atencion_id;
        const precio_venta = req.body.precio_venta;
        const cantidad = req.body.cantidad;
        const imagen = req.body.imagen;
        connection.query('SELECT * FROM producto WHERE nombre = ? ', [nombre], async (error, results) => {
            console.log(Object.keys(results).length);
            //revisar que el nombre sea diferente o si no ya creo el producto
            if (Object.keys(results).length == 0 ) {
                //revisat id punto de atencion, dbe reviar el admin el id de PA
                connection.query('INSERT INTO producto SET ?', { punto_atencion_id: punto_atencion_id, nombre: nombre, precio_venta: precio_venta, cantidad: cantidad, imagen: imagen},
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

export async function agregarPA(req, res){
    try {

        connection.query('SELECT * FROM administrador WHERE usuario_id = ? ', [req.session.passport.user.usuario_id], async (error, results) => {
            if (Object.keys(results).length > 0 ) {
                const establecimiento_nit = results[0].establecimiento_nit;
                const nombre_sede = req.body.nombre_sede;
                const horario = req.body.horario;
                const direccion = req.body.direccion;
                const ciudad = req.body.ciudad;
                connection.query('INSERT INTO punto_atencion SET ?', { establecimiento_nit: establecimiento_nit, nombre_sede: nombre_sede, horario: horario, direccion: direccion, ciudad:ciudad},
                    async (error, results) => {
                        if (error) {
                            console.log(error);
                            res.json({ isOK: false, msj: "Punto de Atencion almacenado de forma INCORRECTA" })
                        } else {
                            res.json({ isOK: true, msj: "Punto de Atencion almacenado de forma correcta" })                                
                        }
                    }
                )
                
            }
            else{
                res.json({ isOK: false, msj: "No encontrado el estabñlecimiento" })
            }
        })
        
    } catch (error) {
        res.json({ message: error.message })
    }
}