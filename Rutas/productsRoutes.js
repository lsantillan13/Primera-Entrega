const productsArr = [];
let id = 0;
module.exports = class Rutas {
    constructor(id, productos) {}
    listar(req, res) {
    productsArr.length === 0 ? res.json('No hay productos') :
    res.json({productsArr});
    };

    listarId(req, res) {
    let params = req.params;
    let id = params.id;
    let i = id;
    id == productsArr[i].id ? res.json(productsArr[i]) : res.json({ Error: 'Producto no encontrado' })
    };

    guardar(req, res) {
    let { title, price, thumbnail, stock, description, timestamp, code } = req.body;
    let newProduct = { title, price, thumbnail, stock, description, timestamp, code, id: id++ };
    productsArr.push(newProduct);
    res.send(newProduct);
    };

    actualizar(req, res) {
    let body = req.body;
    let {id} = req.params;
    const buscar = arr.find(producto => producto.id == id)
    if (buscar === undefined) {res.send({msj: "El producto no existe"})}
    else {
        buscar["title"] = body["title"];
        buscar["price"] = body["price"];
        buscar["thumbnail"] = body["thumbnail"];
        res.send({Msj: 'Producto actualizado', producto: productsArr[id] })
        }
    };

    borrar(req, res) {
    let { id } = req.params;
    const buscar = productsArr.find(producto => producto.id == id)
    if (buscar === undefined) {res.send({ msj: "El producto no existe" })}
    else {
        productsArr = productsArr.filter(producto => producto.id != id);
        res.send(buscar);
    }};
};