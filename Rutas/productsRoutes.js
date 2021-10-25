/* Arrays / Vars / modules */
import fs from 'fs';
export let productsArr = [];
let id = 0;

const arrTxt = fs.readFileSync('./data/products.txt', 'utf-8');
let parsed  = JSON.parse(arrTxt);

/*CLASS METHODS*/
export class Rutas {
    constructor(id, productos) {}


//                          //
/*USUARIOS Y ADMINISTRADORES*/
//                          //

    listar(req, res) {
     parsed.length === 0 ? res.json('No hay productos') : res.json(parsed);
    
    };

//
    listarId(req, res) {
     let params = req.params;
     let id = params.id;
     let i = id;
     id == productsArr[i].id ? res.json(productsArr[i]) : res.json({ Error: 'Producto no encontrado' })
    };

//
//                  //
  /*ADMINISTRADORES*/
//                  //
//
    /*agregar / guardar*/
    guardar(req, res) {
     let { title, price, thumbnail, stock, description, timestamp, code, quantity } = req.body;
     let newProduct = { title, price, thumbnail, stock, description, timestamp, code, id: id++, quantity: 1 };
     productsArr.push(newProduct);
     res.send(newProduct);


     fs.writeFileSync("./data/products.txt", JSON.stringify(productsArr), (err) => {
        if(err) {console.log(err);}
        else{console.log("\nFile Contents of file after append:")}})
    };
//
    actualizar(req, res) {
     let body = req.body;
     let {id} = req.params;
     const buscar = productsArr.find(producto => producto.id == id)
     if (buscar === undefined) {res.send({msj: "El producto no existe"})}
     else {
        buscar["title"] = body["title"];
        buscar["price"] = body["price"];
        buscar["thumbnail"] = body["thumbnail"];
        res.send({Msj: 'Producto actualizado', producto: productsArr[id] })}
    };
//
    borrar(req, res) {
     let { id } = req.params;
     const buscar = productsArr.find(producto => producto.id == id)
     if (buscar === undefined) {res.send({ msj: "El producto no existe" })}
     else {productsArr = productsArr.filter(producto => producto.id != id); res.send(buscar);}
    };
//
/*
*/
//
};