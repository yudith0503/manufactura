var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product: {
        type: mongoose.Schema.Types.ObjectId, 
		ref: 'Product',  
        required:true          
    },
    product_variants: {
        type: mongoose.Schema.Types.ObjectId, 
		ref: 'ProductVariants' ,  
        default:''    
    },      
    product: {
        type: Number, 
        default:''
    },
    amount: {
        type: Number, 
        default:''          
    },
    unit_measure: {
        type: Object, 
        required:true          
    },
    routings: {
        type: Object, 
        default:''          
    },
    product: {
        type: Object, 
        required:true          
    },
    reference: {
        type: String, 
        default:''          
    },
    material_list_type: {
        type: Selection, 
        default:''         
    },
    component: {
        type: String, 
        default:''         
    },
    sequence: {
        type: Number, 
        default:''         
    },
    manufacture_preparation: {
        type: Selection, 
        default:''         
    },
    operation_type: {
        type: Selection, 
        required:true         
    },
    operation_type_goog_production: {
        type: Selection, 
        required:true         
    },
    location_raw_material: {
        type: Selection, 
        default:''         
    },
    location_production: {
        type: Selection, 
        default:''         
    },
    location_product_end: {
        type: Selection, 
        default:''         
    },                     
});

var material_list = new mongoose.model('material_list', schema);

module.exports = material_list;