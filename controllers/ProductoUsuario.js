import connection from "../database/db.js";

export async function productosMenu(req, res) {
  try {
    const punto_atencion_id = req.params.punto_atencion_id;

    connection.query(
      "SELECT producto_id, nombre, precio_venta, cantidad, imagen FROM producto WHERE activo = 1 AND punto_atencion_id = ?",
      [punto_atencion_id],
      async (error, results) => {
        if (results[0] == null) {
          res.json({ error });
        } else {
          res.json({ results });
        }
      }
    );
  } catch (error) {
    res.json({ message: error.message });
  }
}

export async function filtroProductos(req, res) {
  try {
    const filtro = req.body.filtro;
    connection.query(
      "SELECT categoria_id FROM categoria WHERE nombre = ?",
      [filtro],
      async (error, results1) => {
        if (results[0] == null) {
          res.json({ error });
        } else {
          connection.query(
            "SELECT nombre, precio_venta, cantidad, imagen FROM producto WHERE activo = 1 AND punto_atencion_id = ? AND categoria_id = ?",
            [punto_atencion_id, results1[0]],
            async (error, results) => {
              if (results == null) {
                res.json({
                  isOK: false,
                  msj: "Este punto de atención no cuenta con productos de la categoria solicitada.",
                });
              } else {
                res.json({ results });
              }
            }
          );
        }
      }
    );
  } catch (error) {}
}
