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
                console.log(Object.keys(results).length);
                //revisar que el correro no este usado ya
                if (Object.keys(results).length == 0 ) {
                    //encripta clave
                    let hashed = await bcrypt.hash(contrasenia, saltRounds);
                    console.log(hashed);
                    connection.query('INSERT INTO usuario SET ?', { cedula: cedula, nombre: nombre, apellido: apellido, correo: correo, contrasenia: hashed, fecha_nacimiento: fecha_nacimiento, activo: 1 },
                        async (error, results) => {

                            if (error) {
                                console.log(error);
                                res.json({ isOK: false, msj: "Empresa almacenado de forma INCORRECTA en modo administrador" })
                            } else {
                                res.json({ isOK: true, msj: "Empresa almacenado de forma correcta en modo administrador" })
                                console.log(results.insertId);
                                req.session['passport'] = { user: {id:results.insertId} };
                                console.log(req.session.passport.user.id);
                                
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
        const nit = req.body.nit;
        const nombre = req.body.nombre;
        const logo = req.body.logo;
        const rut = req.body.rut;

            connection.query('SELECT * FROM establecimiento WHERE nit = ? ', [nit], async (error, results) => {
                console.log(Object.keys(results).length);
                //revisar que el nit no este usado ya
                if (Object.keys(results).length == 0 ) {
                    //insertar valores
                    connection.query('INSERT INTO establecimiento SET ?', { nit: nit, administrador_codigo: 1234, nombre: nombre, logo: logo, rut: rut},
                        async (error, results) => {

                            if (error) {
                                console.log(error);
                                res.json({ isOK: false, msj: "Establecimiento almacenado de forma INCORRECTA" })
                            } else {
                                connection.query('INSERT INTO administrador SET ?', { establecimiento_nit: nit, usuario_id: req.session.passport.user.id, activo: 1}, async (error, results) => {
                                    if (error) {
                                        console.log(error);
                                        res.json({ isOK: false, msj: "Administrador  almacenado de forma INCORRECTA en modo administrados" })
                                    } else {
                                        res.json({ isOK: true, msj: "Administrador  Y Establecimento almacenado de forma correcta en modo administardor" })
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