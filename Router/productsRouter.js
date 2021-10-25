/* Imports*/
import express from 'express';
import {Rutas} from '../Rutas/productsRoutes.js';

const productsRouter = express.Router();
const rutas = new Rutas();

/*PRODUCTS ROUTES*/
 productsRouter.get('/listar', rutas.listar);
 productsRouter.get('/listar/:id', rutas.listarId);
 productsRouter.post('/agregar', rutas.guardar);
 productsRouter.put('/actualizar/:id', rutas.actualizar);
 productsRouter.delete('/borrar/:id', rutas.borrar);
export default productsRouter;
