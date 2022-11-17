import connection from "../database/db.js";

export async function compraProductos(req, res) {
    try {
        const total = req.session.productos.total
        res.json(total)
    } catch (error) {
        res.json({ message: error.message })

    }
}
