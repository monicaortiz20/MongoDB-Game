
//CONTROLADOR - lógica de negocio de la app
const Product = require('../models/products'); //importo modelo de BBDD del producto
const Provider = require('../models/providers');


const getProducts = async (req, res) => {
    if (req.params.id) { //FIND BY ID
        try {
            let product =  await Product.findOne({id:req.params.id},'title price id -_id')

            res.status(200).json(product);
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`)
            res.status(404).json({"message": "producto no encontrado"});
        }
    } else { //FIND ALL
        try {
            let products =  await Product.find({}, '-_id -__v')
            .populate('provider', 'company_name _id')
            res.status(200).json({products});
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`)
            let products = []
            res.status(404).json(error);
        }
    }
}



// *****se crea primero las funciones por separado fuera y luego las incluye todas en un objeto: 

module.exports = {
getProducts,
// createProduct,
//editProduct,
// deleteProduct
}