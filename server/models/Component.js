var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String, 
        default:''         
    },
    mount: {
        type: Number, 
        default:''         
    },
    consumed_operation: {
        type: Selection, 
        default:''         
    },
    variants: {
        type: Selection, 
        default:''         
    },
    
                     
});

var component = new mongoose.model('component', schema);

module.exports = component;