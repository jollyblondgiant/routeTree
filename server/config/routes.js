const   mongoose = require('mongoose'),
        Product = mongoose.model('Product'),
        products = require('../controllers/products')
module.exports = function(app){
    app.get('/products', (req,res)=>{
        products.getAll(req,res)
    })
    app.get('/products/:id', (req,res)=>{
        products.getOne(req,res)
    })
    app.post('/products', (req,res)=>{
        console.log("ROUTES JS")
        products.create(req,res)
    })
    app.put('/products/:id', (req, res)=>{
        console.log("ROUTES.JS", req)
        products.update(req,res)
    })
    app.delete('/products/:id', (req,res)=>{
        products.destroy(req,res)
    })
}