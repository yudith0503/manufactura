var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String, 
        required:true          
    },
    operation_area: {
        type: Object,
        required:true
    },
    sequence: {
        type: Number,
        default: ''
    },
    operation_next: {
        type: Selection,
        required:true
    },
    amount_process: {
        type: Number,
        default:''
    },
    description: {
        type: String,
        default:''
    },
    direction_calculation: {
        type: Selection,
        default:''
    },    
    based_on: {
        type: Number,
        default:''
    },
    duration: {
        type: Number,
        default:''
    },
    spreadsheet: {
        type: Binary,
        default:''
    }                              
});

var operation = new mongoose.model('Operation', schema);

module.exports = operation;