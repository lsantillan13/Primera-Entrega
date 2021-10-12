/* Instructions  */
import express from 'express';
import path from 'path';
import http from 'http';
const app = express();
const server = http.Server(app);
 /*Routes*/
 import productsRouter from './Router/productsRouter.js';
 import cartRouter from './Router/cartRouter.js';
 /*dirname & filename for non commonjs module*/
 import { fileURLToPath } from 'url';
 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

/*Server up*/
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('port', process.env.PORT || 8080);
server.listen(app.get('port'), () => {
    console.log('server on port',  app.get('port'));
});

/*Router*/
import { Rutas } from './Rutas/productsRoutes.js';
const rutas = new Rutas();

/*Products*/
app.use('/productos', productsRouter);
 /*Cart*/
 app.use('/carrito', cartRouter);
/*Static route*/
app.use(express.static(path.join(__dirname, 'public')));
