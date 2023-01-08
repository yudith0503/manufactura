var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product: {
        type: Object, 
        required:true          
    },
    mount_production: {
        type: Number, 
        default:''        
    },
    material_list: {
        type: Object, 
        required:true         
    },
    routings: {
        type: Object, 
        default:true         
    },
    valid: {
        type: Date, 
        default:''         
    },
    responsible: {
        type: Object, 
        default:''         
    },
    origen: {
        type: String, 
        default:''         
    },
    materials_consumed: {
        type: Object, 
        default:''         
    },
    reference: {
        type: String, 
        required:true       
    },
    unit_measure: {
        type: Object, 
        default:''         
    },
    operation_type: {
        type: Selection, 
        required:true         
    },
    operation_type_voucher_production: {
        type: Selection, 
        required:true         
    },
    location_raw_material: {
        type: Selection, 
        required:true         
    },
    location_production: {
        type: Selection, 
        required:true         
    },
    location_end_product: {
        type: Selection, 
        required:true         
    },

    
            
});

var production_order = new mongoose.model('production_order', schema);

module.exports = production_order;