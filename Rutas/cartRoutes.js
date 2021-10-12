/* Arrays / Vars / modules */
let cartArr = [];
import { productsArr } from './productsRoutes.js';
import fs from 'fs';
/* */

export class Rutas {
    constructor(id, productos) {}

/*USUARIOS Y ADMINISTRADORES*/
    agregar(req, res){
     const params = req.params;
     const id = params.id;
     if (productsArr.length === 0)
     {res.send('<h2>Ooops, it looks like the Cart is quite empty 👀👀</h2>')}
    //  else if ( id == productsArr) console.log(cartArr[0].productsArr[id].id);
     else{
        id == productsArr[id].id ? cartArr.push(productsArr) && res.send({cartArr}) : console.log("Product does not exist");
        console.log({cartArr})
     }
  
    //  console.log(cartArr[id]["id"]);
     
    }
    listar(req, res) {
     cartArr.length === 0 ? res.json('No hay productos') : res.json(cartArr)
     fs.writeFileSync("./data/cart.txt", JSON.stringify(productsArr, 8, "\t"), (err) => {
     if(err) { console.log(err);}
     else{console.log("\nFile Contents of file after append:");
     fs.readFileSync("./data/cart.txt", "utf8")
    }})};

    listarId(req, res) {
     let params = req.params;
     let id = params.id;
     let i = id;
     id == cartArr[i].id ? res.json(cartArr[i]) : res.json({ Error: 'Producto no encontrado' })
    };

    // guardar(req, res) {
    //  let { title, price, thumbnail } = req.body;
    //  let productoNuevo = { title, price, thumbnail, id: id++ };
    //  cartArr.push(productoNuevo);
    //  res.send(productoNuevo);
    // };

    borrar(req, res) {
     let { id } = req.params;
     const buscar = cartArr.find(producto => producto[id].id == id)
     if (buscar === undefined) {res.send({ msj: "El producto no existe" })}
     else {cartArr = cartArr.filter(producto => producto[id].id != id);
     res.send(buscar);}
    };
    
};