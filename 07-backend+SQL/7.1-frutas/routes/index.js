import express from 'express';
import frutaController from '../controller/fruta.controller';

const router = express.Router();

router.get('/frutas/:id', frutaController.getFrutasById) //express.Router().get = app.get();
router.post('/frutas/', frutaController.createFrutas);
router.put('/frutas/:id', controlador)
router.delete('/frutas/:id', controlador)

export default {
    router
}