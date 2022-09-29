import bcrypt from "bcryptjs";
import connection from "../database/db.js";
const saltRounds = 10;

export async function crearCuenta(req,res){
    

    try{
        const cedula = req.body.cedula;
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const correo = req.body.correo;
        const contrasenia = req.body.contrasenia;
        const confirmacionClave = req.body.confirmacionClave;
        const fecha_nacimiento = req.body.fecha_nacimiento;

        if(contrasenia == confirmacionClave){
            connection.query('SELECT * FROM usuario WHERE correo = ? ', [correo], async (error, results) => {
                console.log(Object.keys(results).length);
                //revisar que el correro no este usado ya
                if (Object.keys(results).length == 0 ) {
                    //encripta clave
                    let hashed = await bcrypt.hash(contrasenia, saltRounds);
                    console.log(hashed);
                    connection.query('INSERT INTO usuario SET ?', { cedula: cedula, nombre: nombre, apellido: apellido, correo: correo, contrasenia: hashed, fecha_nacimiento: fecha_nacimiento },
                        async (error, results) => {
                            if (error) {
                                console.log(error);
                                res.json({ isOK: false, msj: "Usuario almacenado de forma INCORRECTA" })
                            } else {
                                res.json({ isOK: true, msj: "Usuario almacenado de forma correcta" })
                            }
                        })

                } else {
                    res.json({ isOK: true, msj: "Correo ya utilizado" })
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

export async function verificarUsuario(req, res) {
    try {
        const correo = req.body.correo;
        const contrasenia = req.body.contrasenia;
        let hashed = await bcrypt.hash(contrasenia, saltRounds);
        
        if(correo && contrasenia){
            connection.query('SELECT * FROM usuario WHERE correo = ? ', [correo], async (error, results) => {
                console.log(Object.keys(results).length);
                if (Object.keys(results).length == 0 || !(await bcrypt.compare(contrasenia,results[0].contrasenia))){
                    
                    res.json({ isOK: false, msj: "usuario o contraseña incorecta" })
                }else{
                    res.json({ isOK: true, msj: "login correcto" })
                }
            })
        }
    } catch (error) {
        res.json({ message: error.message })
    }
}