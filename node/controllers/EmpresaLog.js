import bcrypt from "bcryptjs";
import connection from "../database/db.js";
const saltRounds = 10;

export async function crearCuenta_empresa(req,res){
    

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
                //revisar que el correro no este usado ya
                if (results[0] == null ) {
                    //encripta clave
                    let hashed = await bcrypt.hash(contrasenia, saltRounds);
                    console.log(hashed);
                    connection.query('INSERT INTO usuario SET ?', { cedula: cedula, nombre: nombre, apellido: apellido, correo: correo, contrasenia: hashed, fecha_nacimiento: fecha_nacimiento, activo: 0 },
                        async (error, results) => {

                            if (error) {
                                console.log(error);
                                res.json({ isOK: false, msj: "Empresa almacenado de forma INCORRECTA" })
                            } else {
                                
                                console.log(results.insertId);
            
                                res.json({ isOK: true, msj: "Empresa almacenado de forma correcta" })
                            }
                        })

                } else {
                    res.json({ isOK: false, msj: "Correo ya utilizado" })
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

export async function crear_establecimiento(req,res){
    

    try{
        const usuario_id =req.body.usuario_id;
        const nit = req.body.nit;
        const nombre = req.body.nombre;
        const rut = req.body.rut;

            connection.query('SELECT * FROM establecimiento WHERE nit = ? ', [nit], async (error, results) => {
                //revisar que el nit no este usado ya
                if (results[0] == null) {
                    //insertar valores
                    connection.query('INSERT INTO establecimiento SET ?', { nit: nit, administrador_codigo: 1234, nombre: nombre, rut: rut},
                        async (error, results) => {


                            if (error) {
                                console.log(error);
                                res.json({ isOK: false, msj: "Establecimiento almacenado de forma INCORRECTA" })
                            } else {
                                connection.query('INSERT INTO administrador SET ?', { establecimiento_nit: nit, usuario_id: usuario_id, activo: 0}, async (error, results) => {
                                    if (error) {
                                        console.log(error);
                                        res.json({ isOK: false, msj: "Administrador  almacenado de forma INCORRECTA" })
                                    } else {
                                        res.json({ isOK: true, msj: "Administrador  Y Establecimento almacenado de forma correcta" })
                                    }
                                })
                            }
                        })
                } else {
                    res.json({ isOK: false, msj: "NIT ya utilizado" })
                }
            })
        

    } catch(error) {
        res.json({ message: error.message })

    }
    

}