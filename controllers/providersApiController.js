const Providers = require('../models/providers'); 
const Product = require('../models/products');


//para traer todos los producstos que traiga los datos del proveedor de cada producto.
const getProducts = async (req, res) => {
        try {
            let product =  await Product.find({},'-_id').populate('Providers');
            res.status(200).json(product);
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(404).json({"message": "producto no encontrado"});
        }

}


module.exports = {
    getProducts,
    // createProduct,
    //editProduct,
    // deleteProduct
    }
    