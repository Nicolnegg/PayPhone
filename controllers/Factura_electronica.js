import connection from "../database/db.js";
import fs from "fs";
import pdf from "html-pdf";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const ubicacionPlantilla = require.resolve("../view/facturaPDF.html");

export async function generafactura_pdf(req, res) {
  const usuario_id = req.params.userId;
  let contenidoHtml = fs.readFileSync(ubicacionPlantilla, "utf8");
  const formateador = new Intl.NumberFormat("en", {
    style: "currency",
    currency: "COP",
  });
  console.log("FACTURA");
  let productostabla = {};
  let total = 0;
  connection.query(
    "SELECT P.nombre, P.precio_venta, C.cantidad FROM carrito C, producto P WHERE C.usuario_id = ? AND P.producto_id = C.producto_id",
    [usuario_id],
    async (error, results) => {
      if (results) {
        productostabla = results;
        // Generar el HTML de la tabla
        let tabla = "";
        for (const producto of Object.keys(productostabla)) {
          // Y concatenar los productos
          if (producto != "total") {
            tabla += `<tr>
                <td>${productostabla[producto].nombre}</td>
                <td>${productostabla[producto].cantidad}</td>
                <td>${formateador.format(
                  productostabla[producto].precio_venta
                )}</td>
                <td>${formateador.format(
                  productostabla[producto].precio_venta *
                    productostabla[producto].cantidad
                )}</td>
                </tr>`;
          }
        }

        // Remplazar el valor {{tablaProductos}} por el verdadero valor
        contenidoHtml = contenidoHtml.replace("{{tablaProductos}}", tabla);

        // Y también los otros valores
        for (var j = 0; j < Object.keys(results).length; j++) {
          total += results[j].precio_venta * results[j].cantidad;
        }

        contenidoHtml = contenidoHtml.replace(
          "{{total}}",
          formateador.format(total)
        );

        //eliminatos los datos pagados del carro
        

        pdf.create(contenidoHtml).toStream((error, stream) => {
          if (error) {
            res.end("Error creando PDF: " + error);
          } else {
            res.setHeader("Content-Type", "application/pdf");
            stream.pipe(res);
          }
        });
      }
    }
  );
}
