const Product = require('../models/Product.model.js');
const jwt = require('jsonwebtoken');
const accessTokenSecret = 'MyTODOApp';

const users = [
    {
        username: 'john',
        password: 'password123admin',
        role: 'admin'
    }, {
        username: 'anna',
        password: 'password123member',
        role: 'member'
    }
];

exports.login = (req, res) => {

    // Read username and password from request body
    const { username, password } = req.body;

    // Filter user from the users array by username and password
    const user = users.find(u => { return u.username === username && u.password === password });

    if (user) {
        // Generate an access token
        const accessToken = jwt.sign({ username: user.username,  role: user.role }, accessTokenSecret);

        res.json({
            accessToken
        });
    } else {
        res.json({'message':'Username or password incorrect'});
    }
}


exports.authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};



// Create and Save a new Product
exports.create = (req, res) => {

    
    // Validate request
    if(!req.body.PId) {
        return res.status(400).send({
            message: "Product PId can not be empty"
        });
    }
 
     const product = new Product({
        PId: req.body.PId,
         PType: req.body.PType || "Untitled Product", 
         PName: req.body.PName
     });


 // Save Product in the database
    product.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Product."
        });
    });
    res.status(200).send({ message: 'succesfully insert Product in MongoDB' })

   
};



// Retrieve and return all Products from the database.
exports.findAll = (req, res) => {


    Product.find()
    .then(Products => {
      
        res.send(Products);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Products."
        });
    });
};



// Find a single Product with a ProductId
exports.findOne = (req, res) => {
    Product.find({"PId": Number(req.params.PId)})
    .then(Product => {

        if(!Product) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.PId
            });            
        }
        res.send(Product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.PId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Product with id " + req.params.PId
        });
    });
};

// Update a Product identified by the ProductId in the request
exports.update = (req, res) => {

      // Validate Request
      if(!req.params.PId) {
        return res.status(400).send({
            message: "Product PId can not be empty"
        });
    }

    // Find Product and update it with the request body
    Product.update({"PId": Number(req.params.PId)},  {$set:{
        PId: req.body.PId || "Untitled Product",
        Ptitle: req.body.Ptitle,
        PName: req.body.PName
    }}, {new: true})
    .then(Product => {
        if(!Product) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.PId
            });
        }
        res.send(Product);
    }).catch(err => {

        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.PId
            });                
        }
        return res.status(500).send({
            message: "Error updating Product with id " + req.params.PId
        });
    });

    res.send({
        message: "Product Update Successfully"
    });
  
};

// Delete a Product with the specified ProductId in the request
exports.delete = (req, res) => {

    Product.deleteMany({"PId": Number(req.params.PId)})
    .then(Product => {

        if(!Product) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.PId
            });
        }
        res.send({message: "Product deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.PId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Product with id " + req.params.PId
        });
    });



};