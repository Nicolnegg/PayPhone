import connection from "../database/db.js";

export async function compraProductos(req, res) {
    const usuario_id = req.body.usuario_id;
    const fecha = req.body.fecha;
    const total = req.body.total;

    connection.query('INSERT INTO factura SET ?', { usuario_id: usuario_id, fecha: fecha, total: total},
    async (error, results) => {

        if(results){
            res.json({ isOK: true, msj: "insertada factura a bases de datos" });
        }
        else{
            res.json({ isOK: false, msj: "No se pudo insertar factura" });
        }
        
    })
}
