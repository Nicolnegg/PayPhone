import {Sequelize} from 'sequelize'

const db= new Sequelize('database_payphone','root','',{
    host:'localhost',
    dialect: 'mysql'
})

export default db