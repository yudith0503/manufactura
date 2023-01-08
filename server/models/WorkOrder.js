var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    to_manufacture: {
        type: String, 
        required:true          
    },
    amount_produce: {
        type: String, 
        required:true          
    },
    work_instructions: {
        type: Object, 
        required:true          
    },  
    current_amount: {
        type: Object, 
        required:true          
    },
    product_list: {
        type: Object, 
        required:true          
    },
    to_manufacture: {
        type: String, 
        required:true          
    },
    planned_date: {
        type: Date, 
        required:true          
    },
    preview_date: {
        type: String, 
        required:true          
    },
    preview_duration: {
        type: Number, 
        required:true          
    },
    actual_duration: {
        type: Number, 
        required:true          
    },
    work_order: {
        type: String, 
        required:true          
    },
    production_center: {
        type: Object, 
        required:true          
    },
    production_order: {
        type: String, 
        required:true          
    },
            
});

var work_order = new mongoose.model('work_order', schema);

module.exports = work_order;