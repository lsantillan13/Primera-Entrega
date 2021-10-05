/* Instructions  */
const express = require('express');
const productsRouter = require('./Router/productsRouter.js');
const cartRouter = require('./Router/cartRouter.js');

const path = require('path');
const app = express();
const http = require('http').Server(app);

/*Server up*/
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('port', process.env.PORT || 8080);
http.listen(app.get('port'), () => {
    console.log('server on port',  app.get('port'));
});

/*Router*/
const Rutas = require('./Rutas/cartRoutes.js');
const rutas = new Rutas();

/*Products*/
app.use('/productos', productsRouter);
 /*Cart*/
 app.use('/carrito', cartRouter);

app.use(express.static(path.join(__dirname, 'public')));