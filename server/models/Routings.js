var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String, 
        required:true          
    },
    operation: {
        type: Object,
        default: ''
    },
    description: {
        type: String,
        default: ''
    }    
});

var routings = new mongoose.model('routings', schema);

module.exports = routings;