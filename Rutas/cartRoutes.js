let cartArr = [];
let id = 0;
module.exports = class Rutas {
    constructor(id, productos) {}
    
    /*VOY A NECESITAR USAR UNA LIBRERIA*/
    listar(req, res) {
    cartArr.length === 0 ? res.json('No hay productos') :
    res.send(`<h1>${cartArr[0]["title"]}</h1>`)
    };

    listarId(req, res) {
    let params = req.params;
    let id = params.id;
    let i = id;
    id == cartArr[i].id ? res.json(cartArr[i]) : res.json({ Error: 'Producto no encontrado' })
    };

    guardar(req, res) {
    let { title, price, thumbnail } = req.body;
    let productoNuevo = { title, price, thumbnail, id: id++ };
    cartArr.push(productoNuevo);
    res.send(productoNuevo);
    };

    actualizar(req, res) {
    let body = req.body;
    let {id} = req.params;
    const buscar = cartArr.find(producto => producto.id == id)
    if (buscar === undefined) {res.send({msj: "El producto no existe"})}
    else {
        buscar["title"] = body["title"];
        buscar["price"] = body["price"];
        buscar["thumbnail"] = body["thumbnail"];
        res.send({Msj: 'Producto actualizado', producto: cartArr[id] })
        }
    };

    borrar(req, res) {
    let { id } = req.params;
    const buscar = cartArr.find(producto => producto.id == id)
    if (buscar === undefined) {res.send({ msj: "El producto no existe" })}
    else {
         cartArr = cartArr.filter(producto => producto.id != id);
        res.send(buscar);
    }};
};