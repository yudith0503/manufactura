var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product: {
        type: Object, 
        required:true         
    },
    operation: {
        type: Object, 
        default:''       
    },
    checkpoint: {
        type: Object, 
        default:''        
    },
    team: {
        type: Object, 
        required:true         
    },                 
                     
});

var quality_control = new mongoose.model('quality_control', schema);

module.exports = quality_control;