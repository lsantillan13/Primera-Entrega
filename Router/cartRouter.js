/* Imports*/
import express from 'express';
import {Rutas} from '../Rutas/cartRoutes.js';
const cartRouter = express.Router();
const rutas = new Rutas();

/*CART ROUTES*/
 cartRouter.get('/agregar/:id', rutas.agregar);
 cartRouter.get('/listar', rutas.listar);
 cartRouter.get('/listar/:id', rutas.listarId);
 cartRouter.delete('/borrar/:id', rutas.borrar);
//  cartRouter.get('/vista', rutas.vistas);

export default cartRouter;