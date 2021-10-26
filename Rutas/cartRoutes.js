/* Arrays / Vars / modules */
let cartArr = [];
import { productsArr } from './productsRoutes.js';
import fs from 'fs';
/* */
export class Rutas {
    constructor(id, productos) {}

/*USUARIOS Y ADMINISTRADORES*/
    // agregar(req, res){
    //  const params = req.params;
    //  const id = params.id;
    //  if (productsArr.length === 0)
    //  {res.send('<h2>Ooops, it looks like the Cart is quite empty 👀👀</h2>')}
    //  else{id == productsArr[id].id ? cartArr.push(productsArr[id]) && res.send({cartArr}) : console.log("Product does not exist");}
    // }

    listar(req, res) {
        let dataC = fs.readFileSync('./data/cart.txt', 'utf-8');
        let jsonC = JSON.parse(dataC);
            /**/
              if (jsonC.length != 0)
               {res.json(jsonC)}
              else if(cartArr.length === 0)
               {res.json('No hay productos')}
              else
               {res.json(cartArr)}
            };
        

    agregar(req, res){
    let dataC = fs.readFileSync('./data/cart.txt', 'utf-8');
    let dataP = fs.readFileSync('./data/products.txt', 'utf-8');
    let jsonC = JSON.parse(dataC);
    let jsonP = JSON.parse(dataP);
    let params = req.params;
    let id = params.id;
    let encontrar = jsonP.find(e => e.id == id);
        id == encontrar.id ? cartArr.push(encontrar) && res.send(encontrar) : res.send(`Couldn't find product with id ${id}`);
        // id == encontrar.id ? cartArr.push(encontrar) || res.send(encontrar) : res.send(`Product id ${id} doesn't exist`)
        fs.writeFileSync("./data/cart.txt", JSON.stringify(cartArr, 8 , "\t"), (err) => {
        if(err)
         {console.log(err);}
        else
         {console.log("\nFile Contents of file after append:")}
        })
    }

    listarId(req, res) {
        let dataC = fs.readFileSync('./data/cart.txt', 'utf-8');
        let jsonC = JSON.parse(dataC);
     let params = req.params;
     let id = params.id;
     let i = id;
     let encontrar = jsonC.find(e => e.id == id);
     console.log(encontrar)
     id == encontrar.id ? res.json(encontrar) : res.json({ Error: 'Producto no encontrado' });
    }

    borrar(req, res) {
     let params = req.params;
     let id = params.id;
     let encontrar = cartArr.find(e => e.id == id);
       //
          if (encontrar === undefined)
          {res.send({ msj: "El producto no existe" })}
          else
          {cartArr = cartArr.filter(e => e.id != id); res.send(cartArr)}
          /**/
         fs.writeFileSync("./data/cart.txt", JSON.stringify(cartArr, 8 ,'\t'), (err) => {
             if(err)
              {console.log(err);}
             else
              {console.log("\nFile Contents of file after append:")}})
    };
    
};