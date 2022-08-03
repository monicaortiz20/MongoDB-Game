const express = require('express');

const providersApiController = require("../controllers/providersApiController")  // importa el controlador

const providersApiRouter = express.Router();

providersApiRouter.get('/:id?', providersApiController.getProviders);
// providersApiRouter.post('/', providersApiController.createProvider);
// providersApiRouter.delete("/", providersApiController.deleteProvider); 


module.exports = providersApiRouter;