import express from 'express';// const express = require('express');
import router from './routes';

const app = express();
app.use(express.json());

app.use(router)// se conectan las rutas que estan en la carpeta routes

app.listen(8080, () => console.log('Server listening on portr 8080'))
// sigue clase del 23/08/2023 clase sig. desde el 11/09/23