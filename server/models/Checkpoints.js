var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String, 
        default:''         
    },
    product: {
        type: mongoose.Schema.Types.ObjectId, 
		ref: 'Product' , 
        required:true         
    },
    operation: {
        type: mongoose.Schema.Types.ObjectId, 
		ref: 'Operation' , 
        required:true        
    },  
    type_control: {
        type: Selection, 
        required:true         
    },
    type_test: {
        type: Selection, 
        required:true         
    },
    criterion: {
        type: Selection, 
        required:true         
    },
    team: {
        type: String, 
        default:''         
    },
    responsible: {
        type: String, 
        default:''         
    },
    instrucciones: {
        type: String, 
        default:''         
    },
    notes: {
        type: String, 
        default:''         
    },       
                     
});

var checkpoint = new mongoose.model('checkpoint', schema);

module.exports = checkpoint;