import bcrypt from "bcryptjs";
import connection from "../database/db.js";
import passport from "passport";
import jwt from 'jsonwebtoken';
const saltRounds = 10;
const usuarioId =1;

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

export async function verificarUsuario(req, res) {
    try {
        const correo = req.body.correo;
        const contrasenia = req.body.contrasenia;
        let hashed = await bcrypt.hash(contrasenia, saltRounds);
        
        if(correo && contrasenia){
            connection.query('SELECT * FROM usuario WHERE correo = ? ', [correo], async (error, results) => {

                console.log(Object.keys(results).length);
                
                
                if (Object.keys(results).length == 0 || !(await bcrypt.compare(contrasenia,results[0].contrasenia))){
                    
                    res.json({ isOK: false, msj: "usuario o contraseña incorrecta" })
                }else{
                    //campos de login
                    req.session['passport'] = { user: '' }
                    req.session['productos'] = { total: 0 }
                    req.session.passport.user = results[0]
                    
                    // create token
                    const token = jwt.sign(
                        {
                        name: req.session.passport.user.nombre,
                        id: req.session.passport.user.usuario_id
                        }, 
                    'secret_key')

                    res.header('auth-token', token).json({
                        error: null,
                        data: { token }
                    })
                    
                    
                }
            })
        }
        //console.log(req.sessioncookie)
        //console.log('cookie')
    } catch (error) {
        res.json({ message: error.message })
    }
}

passport.serializeUser(function (user, done) {
    console.log('OK')//is show in console
    done(null, user);
});

export async function pago_despues_carrito(req, res) {
    const user = usuarioId
    res.json(user)
    //id usuario y id metodo de pago (id es mismo ,metodo diferente) ase debe seleccionar metodo (entrada)
    //cnsulta con id de usuario los productos en carrito
    //revidsamos el precio
    //sumamos
    //consultamos id usuario metodos de pago
    //seleccionamos y seguimos

}

export async function recuperarContraseña(req, res){
    try {
        const correo = req.body.correo;

        //Requerimos el paquete
        var nodemailer = require('nodemailer');

        //Creamos el objeto de transporte
        var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'payphonecol@gmail.com',
            pass: 'payphone1234'
        }
        });

        connection.query('SELECT contrasenia FROM usuario WHERE correo = ?', [correo], async (error, results) => {
            if (results == null){
                //TODO: Convertir contraseña
                res.json({ error })
            }else{
                res.json({ results })
            }
        })

        var mensaje = "Hola! usuario PayPhone, aqui esta tu contraseña" + results[0];
        
        var mailOptions = {
            from: 'payphonecol@gmail.com',
            to: correo,
            subject: 'Recuperación de contraseña',
            text: mensaje
          };


        transporter.sendMail(mailOptions, function(error, info){
           if (error) {
             console.log(error);
           } else {
             console.log('Email enviado: ' + info.response);
           }
        });

    } catch (error) {
        
    }
}

export async function consultarUsuario(req,res){
    try {
        const usuario_id = req.body.usuario_id;
        connection.query('SELECT cedula, nombre, apellido, correo, direccion, ciudad, celular, genero, fecha_nacimiento FROM usuario WHERE usuario_id = ? ', [usuario_id], async (error, results) => {
            if (results == null ) {
                res.json({ error })
            } else {
                res.json({ results })
            }
        })
    } catch (error) {
        
    }
}

export async function actualizarCuenta(req,res){
    try {
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const correo = req.body.correo;
        const direccion = req.body.direccion;
        const ciudad = req.body.ciudad;
        const celular = req.body.celular;
        const genero = req.body.genero;
        const fecha_nacimiento = req.body.fecha_nacimiento;

        connection.query('UPDATE usuario SET ?', { nombre: nombre, apellido: apellido, correo: correo, direccion: direccion, ciudad: ciudad, celular: celular, genero: genero, fecha_nacimiento: fecha_nacimiento },
            async (error, results) => {
                if (error) {
                    res.json({ error })
                } else {
                    res.json({ isOK: true, msj: "Usuario almacenado de forma correcta" })
                }
            })

    } catch(error) {
        res.json({ message: error.message })
    }
}