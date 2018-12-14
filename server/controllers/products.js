var     Product = require('../models/product'),
        mongoose = require('mongoose'),
        Product = mongoose.model('Product')
module.exports = {
    getAll: (req,res)=>{
        Product.find({}, (err, products)=>{
            res.json(products)
        })
    },
    getOne:(req,res)=>{
        var id = req.params.id
        Product.findById(id, (err,product)=>{
            if(err){res.json(err)}
            else{res.json(product)}
        })
    },
    create:(req,res)=>{
        var product = new Product
        product.name = req.body.name
        product.img = req.body.img
        product.price = req.body.price
        product.save(function(err){
            if(err){
                res.json(err)
            }else{
                res.json(product)
            }
        })
    },
    update:(req,res)=>{
        Product.update({id: req.params.id},  {
            $set:{
                name: req.body.name,
                price: req.body.price
            },
        },
        { runValidators: true },
        (err, product)=>{
            if(err){
                res.json(err)
            }else{res.json(product)}
        })
    },
    destroy:(req,res)=>{
        Product.findByIdAndRemove(req.params.id, (err)=>{
            res.redirect('/')
        })
    }
}