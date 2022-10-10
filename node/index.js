import express from "express";
import dotenv from "dotenv";
import cors from 'cors'
import router from "./routes/routes.js";
import session from "express-session";
import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";



import appRoutes from './routes/routes.js';

const app= express();

app.use(express.urlencoded({extended:false}));
app.use( cors() );
app.use(express.json());
app.use('/usuario', appRoutes);

//invocamos dovet

dotenv.config({path:'./.env'});



app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
})); 

app.use(passport.initialize());
app.use(passport.session());

app.use (router);

app.listen(8000,()=>{
    console.log('Server UP running in http://localhost:8000')
})



//passport

passport.use(
    new GoogleStrategy({
    clientID: '135583077973-8fku4sbr9chhk2julhfqa4a6bosnriom.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:8000/google/redirect'
    },
    (accessToken, refreshToken, profile, done) => {
        //done(null, profile); // passes the profile data to serializeUser
        console.log(profile)

        db.query('SELECT * FROM usuario WHERE cedula = ? ', [profile.id], async (error, results) => {

        
            if (Object.keys(results).length == 0) {
                
                db.query('INSERT INTO usuario SET ?', { cedula: profile.id, nombre: profile.name.givenName, apellido: profile.name.familyName }, async (error, resultados) => {
                    if (error) throw error;
                    console.log('Registrado google')
                    console.log(resultados);
                    console.log(db.query('SELECT * FROM usuario WHERE usuario_id = ? ', [resultados.insertId], async (error, results) => { 
                        console.log(results[0].usuario_id) 
                        done(null, results[0])
                    }))
                })
                
            }
            else {
                done(null, results[0])
                console.log('ya registrado')
                console.log(results[0].usuario_id)

            }
        })
        
    }
));

passport.serializeUser((user, done) =>{
    done(null, user.usuario_id )
})

passport.deserializeUser((id, done) => {
    db.query('SELECT * FROM usuario WHERE usuario_id = ? ', [id], async (error, results) => {
        done(null, results[0])
    })
})