
//CONTROLADOR - lógica de negocio de la app
const Product = require('../models/products'); //importo modelo de BBDD del producto

const getProducts = async (req, res) => {
    if (req.params.id) { //búsqueda por ID
        try {
            let product =  await Product.find({id:req.params.id},'title price description id -_id');
            res.status(200).json(product); //devuelve un único producto en formato objeto
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(404).json({"message": "producto no encontrado"}); // si no lo encuentra nos manda un objeto vacío {con el sms que le hemos puesto}
        }
    } else {    //find ALL
        try {
            let products = await Product.find({},'title price id -_id').sort('-id')
            res.status(200).json({ products }); // Pinta datos en el pug
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            let products = []; //esta variable es el products moradito de la línea de abajo, podemos no escribir esta línea
            res.status(404).json({"message":" no encontrado"});
        }
    }
}

const createProduct = async (req, res) => {

    console.log("Esto es el consol.log de lo que introducimos por postman",req.body); // Objeto recibido de producto nuevo
    const newProduct = req.body; // {} nuevo producto a guardar

    try {
        let product = await new Product(req.body) //esta línea crea el obj Producto con los datos del producto
        let answer = await product.save() //guardo objeto de MOngo
        console.log("Este es el console.log de lo que devuelve la api",answer);
        res.status(201).json({"message": `Producto ${answer.title} guardado en el sistema con ID: ${answer.id}`});

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({"message": `Producto ${answer.title} guardado en el sistema con ID: ${answer.id}`})
    }
 
}

const deleteProduct= async (req,res)=>{    
    const msj ="Has enviado un DELETE";
    console.log(msj);
    res.json({"message": msj});
}
  

// *****se crea primero las funciones por separado fuera y luego las incluye todas en un objeto: 

module.exports = {
getProducts,
createProduct,
//editProduct,
deleteProduct
}