import connection from "../database/db.js";
import fs from "fs";
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const ubicacionPlantilla = require.resolve("../view/facturaPDF.html");

export async function generafactura_pdf(req, res){

    let contenidoHtml = fs.readFileSync(ubicacionPlantilla, 'utf8')
    const formateador = new Intl.NumberFormat("en", { style: "currency", "currency": "COP" });
    console.log("FACTURA")
    const productostabla = req.session.productos   
     // Generar el HTML de la tabla
     let tabla = "";
     for (const producto of Object.keys(productostabla)) {
         // Y concatenar los productos
        if(producto != "total"){
            tabla += `<tr>
            <td>${productostabla[producto].nombre}</td>
            <td>${productostabla[producto].cantidad}</td>
            <td>${formateador.format(productostabla[producto].precio)}</td>
            <td>${formateador.format((productostabla[producto].precio)*(productostabla[producto].cantidad))}</td>
            </tr>`;
        }
         
     }
     const total = req.session.productos.total;
     // Remplazar el valor {{tablaProductos}} por el verdadero valor
     contenidoHtml = contenidoHtml.replace("{{tablaProductos}}", tabla);
 
     // Y también los otros valores
     contenidoHtml = contenidoHtml.replace("{{total}}", formateador.format(total));
     pdf.create(contenidoHtml).toStream((error, stream) => {
         if (error) {
             res.end("Error creando PDF: " + error)
         } else {
             res.setHeader("Content-Type", "application/pdf");
             stream.pipe(res);
         }
     });
} 