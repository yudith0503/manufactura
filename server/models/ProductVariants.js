var mongoose = require('mongoose'); 

var schema = new mongoose.Schema({
    nombre: {
        type: String,   
        required:true        
    },
    
});

var ProductVariants= new mongoose.model('ProductVariants', schema);

module.exports = ProductVariants;