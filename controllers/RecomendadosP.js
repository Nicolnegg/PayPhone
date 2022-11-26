import connection from "../database/db.js";

export async function top_productos(req, res) {
  connection.query(
    "SELECT count(C.producto_id ) AS compras, P.nombre, P.precio_venta, P.imagen FROM carrito C INNER JOIN producto P ON C.producto_id = P.producto_id GROUP BY C.producto_id ORDER BY compras DESC LIMIT 10",
    async (error, results) => {
      if (results) {
        res.json({ results }); //compras es el numero d eveces que se a agrgado al carrito
      } else {
        res.json({ isOK: false, msj: "Nada en top" });
      }
    }
  );
}
