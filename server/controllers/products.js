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
        var product = new product
        product.name = req.body.name
        product.quote = req.body.quote
        product.save(function(err){
            if(err){
                for(var idx in err.errors){
                    console.log(err.errors[idx].message)
                }
                res.json(product)
            }else{
                res.json(product)
            }
        })
    },
    update:(req,res)=>{
        
        console.log("REQ.BODY", req.body)
        Product.findByIdAndUpdate(req.params.id,{
            $set:{
                name: req.body.name,
                quote: req.body.quote
            },
        },
        (err, product)=>{
            if(err){
                for(var key in err.errors){
                    console.log(err.errors[key].message)
                }
                res.json(product)
            }else{res.json(product)}
        })
    },
    destroy:(req,res)=>{
        Product.findByIdAndRemove(req.params.id, (err)=>{
            res.redirect('/')
        })
    }
}