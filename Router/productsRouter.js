/* Imports*/
const express = require("express");
const Rutas = require('../Rutas/productsRoutes.js');
const productsRouter = express.Router();
const rutas = new Rutas();

/*PRODUCTS ROUTES*/
 productsRouter.get('/listar', rutas.listar);
 productsRouter.get('/listar/:id', rutas.listarId);
 productsRouter.post('/agregar', rutas.guardar);
 productsRouter.put('/actualizar/:id', rutas.actualizar);
 productsRouter.delete('/borrar/:id', rutas.borrar);
module.exports = productsRouter;
