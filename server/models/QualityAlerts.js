var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product: {
        type: Object, 
        default:''        
    },
    team: {
        type: Object, 
        required:true       
    },
    responsible: {
        type: Object, 
       default:''       
    },
    labels: {
        type: Object, 
       default:''       
    },
    main_cause: {
        type: Object, 
       default:''       
    },  
    priority: {
        type: Selection, 
       default:''       
    },  
    description: {
        type: String, 
       default:''       
    }, 
    corrective_measures: {
        type: String, 
       default:''       
    }, 
    preventive_measures: {
        type: String, 
       default:''       
    },  
    supplier: {
        type: Object, 
       default:''       
    },   
    assigned_date: {
        type: String, 
       default:''       
    },                                       
                     
});

var quality_alerts = new mongoose.model('quality_alerts', schema);

module.exports = quality_alerts;