import bcrypt from "bcrypt";
import connection from "../database/db.js";
const saltRounds = 10;

export async function crearCuenta(req,res){
    

    try{
        const cedula = req.body.cedula;
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const correo = req.body.correo;
        const contraseña = req.body.contraseña;
        const confirmacionClave = req.body.confirmacionClave;
        const fecha_nacimiento = req.body.fecha_nacimiento;

        if(contraseña == confirmacionClave){
            //encripta clave
            const hashed = await bcrypt.hash(contraseña, saltRounds);
            console.log(hashed);
            connection.query('INSERT INTO usuarios SET ?', { cedula: cedula, nombre: nombre, apellido: apellido, correo: correo, contraseña: hashed, fecha_nacimiento: fecha_nacimiento },
                async (error, results) => {
                    if (error) {
                        console.log(error);
                        res.json({ isOK: false, msj: "Usuario almacenado de forma incorrecta" })
                    } else {
                        res.json({ isOK: true, msj: "Usuario almacenado de forma correcta" })
                    }
                })
            


        } else{
            //mensaje de error
            res.json({ isOK: false, msj : "la contraseña y su confirmacion es incorrecta" })

        }

    } catch(error) {
        res.json({ message: error.message })

    }

}

export const registro = async (req, res) => {
    try {
        

    } catch (error) {
        res.json({ message: error.message })
    }
}