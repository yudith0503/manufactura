var mongoose = require('mongoose'); 

var schema = new mongoose.Schema({
    nombre: {
        type: String,   
        required:true        
    },
    
});

var QualityLavels= new mongoose.model('QualityLavels', schema);

module.exports = QualityLavels;