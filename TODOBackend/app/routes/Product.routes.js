module.exports = (app) => {
    const product = require('../controllers/Product.controller.js');

    // Create a new Product
    app.post('/product', product.create);

    // Retrieve all product
    app.get('/product', product.findAll);

    // Retrieve a single Product with ProductId
    app.get('/product/:PId', product.findOne);

    // Update a Product with ProductId
    app.put('/product/:PId', product.update);

    // Delete a Product with ProductId
    app.delete('/product/:PId', product.delete);
}