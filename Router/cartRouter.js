/* Imports*/
const express = require("express");
const Rutas = require('../Rutas/cartRoutes.js');

const cartRouter = express.Router();
const rutas = new Rutas();

/*CART ROUTES*/
 cartRouter.post('/guardar', rutas.guardar);
 cartRouter.get('/listar', rutas.listar);
 cartRouter.get('/listar/:id', rutas.listarId);
 cartRouter.put('/actualizar/:id', rutas.actualizar);
 cartRouter.delete('/borrar/:id', rutas.borrar);
//  cartRouter.get('/vista', rutas.vistas);
module.exports = cartRouter;