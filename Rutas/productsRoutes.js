/* Arrays / Vars / modules */
import fs from 'fs';
export let productsArr = [];
let id = 0;

/*CLASS METHODS*/
export class Rutas {
    constructor(id, productos) {}
    /*agregar / guardar*/
    guardar(req, res) {
     let { title, price, thumbnail, stock, description, timestamp, code, quantity } = req.body;
     let newProduct = { title, price, thumbnail, stock, description, timestamp, code, id: id++, quantity: 1 };
      productsArr.push(newProduct); res.send(newProduct);
        /**/
         fs.writeFileSync("./data/products.txt", JSON.stringify(productsArr), (err) => {
        if(err)
         {console.log(err);}
        else
         {console.log("\nFile Contents of file after append:")}})
    };

    listar(req, res) {
    let data = fs.readFileSync('./data/products.txt', 'utf-8');
    let parsed  = JSON.parse(data);
    /**/
      if (parsed.length != 0)
       {res.json(parsed)}
      else if(productsArr.length === 0)
       {res.json('No hay productos')}
      else
       {res.json(parsed)}
    };

    listarId(req,res){
        let data = fs.readFileSync('./data/products.txt', 'utf-8');
        let parsed  = JSON.parse(data);
        let params = req.params;
        let id = params.id;
        let i= id;
        id == parsed[i].id ?  res.json(parsed[i]) : res.json({Error: 'Producto no encontrado'})
    }

    actualizar(req, res) {
        /*Leer txt*/
     let data = fs.readFileSync('./data/products.txt', 'utf-8');
     let parsed  = JSON.parse(data);
     let body = req.body;
     let {id} = req.params;
        /*Buscar producto*/
     const buscar = parsed.find(producto => producto.id == id)
        /*Si no existe*/
     if (buscar === undefined) {res.send({msj: "El producto no existe"})}
     else {
        buscar["title"] = body["title"];
        buscar["price"] = body["price"];
        buscar["thumbnail"] = body["thumbnail"];
        res.send({Msj: 'Producto actualizado', producto: parsed[id] })}
        /**/
        productsArr.push(parsed);
        /**/
        fs.writeFileSync("./data/products.txt", JSON.stringify(parsed), (err) => {
            if(err)
             {console.log(err);}
            else
             {console.log("\nFile Contents of file after append:")}})
    };
//
    // borrar(req, res) {
    //     let { id } = req.params;
    // const data = fs.readFileSync('./data/products.txt', 'utf-8');
    //     let parsed  = JSON.parse(data);
    // const buscar = parsed.find(producto => producto.id == id);
    // console.log(buscar)
     
    //  if (buscar === undefined) {res.send({ msj: "El producto no existe" })}
    //  else {parsed = productsArr.filter(producto => producto.id != id); res.send(buscar)}

    // //  fs.writeFileSync("./data/products.txt", JSON.stringify(productsArr), (err) => {
    // //     if(err) {console.log(err);}
    // //     else{console.log("\nFile Contents of file after append:")}})
    

    borrar(req, res) {
    let data = fs.readFileSync('./data/products.txt', 'utf-8');
    let parsed  = JSON.parse(data);
    let params = req.params;
    let id = params.id;
    let encontrar = parsed.find(e => e.id == id);
      //
         if (encontrar === undefined)
         {res.send({ msj: "El producto no existe" })}
         else
         {parsed = parsed.filter(e => e.id != id); res.send(encontrar);}
         console.log(encontrar);
    }
};
