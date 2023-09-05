// commonJS
//const myModule = require ('./sample_modules')

// Ecmascript modules
// import myModule from './sample_modules.js'

// const result = myModule.sum( 1, 2 )

// console.log(result)
//----------------------------------------------------------------


// importamos el modulo con Ecmascript modules
import express from 'express'
// inicializamos el modulo y lo guardamos en una variable (app) 
const app = express()

app.get('/', function(req, res){
    console.log('HOLA MUNDO')
})



// utilizamos la función listen del modulo para correr el servidor
app.listen(3000, ()=> {
    console.log('server running')
})
// clase min 01:12:50 16/08/2023