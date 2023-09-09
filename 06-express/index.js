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

app.use(express.json())

// Endpoint por default
app.get('/', function(request, response){
    console.log(request.query)
    response.status(200).send({mensaje: 'hola mundo'})
})

// Endpoint de users 'Get' (ejemplo)
app.get('/users', function(request, response){
    const users = ['Camila', 'Felipe', 'Jason']
    response.status(200).send({data: users})
})

// Endpoint de users 'Get con params' (ejemplo)
app.get('/users/:user_id', function(request, response){
    console.log(request.params.user_id)
    response.status(200).send({mensaje: 'usuario encontrado'})
})

// Endpoint de users 'Post' (ejemplo)
app.post('/users', function(request, response){
    if(!request.body.name) {
        response.status(400).send({error: 'Por favor envía los datos del usuario'})
    }

    const userName = request.body.name
    console.log(userName)

    response.status(201).send({mensaje: 'Usuario creado'})
})

// Endpoint de cars 'Post' (ejemplo)
app.post('/cars', function(request, response){
    console.log(request.body.brand)
    response.status(200).send({mensaje: 'Carro creado'})
})

// utilizamos la función listen del modulo para correr el servidor
// Esta función siempre debe estar al final
app.listen(3000, ()=> {
    console.log('server running')
})
// clase min 01:37:44 16/08/2023