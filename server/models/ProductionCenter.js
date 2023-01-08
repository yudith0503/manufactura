var mongoose = require('mongoose'); 

var schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required:true           
    },
    code: {
        type: String,
        required:true    
    },
    work_hours: {
        type: Object,
        required:true    
    },
    efficiency_time: {
        type: Number,
        required:true
    },
    ability: {
        type: Number,
        required:true
    },
    object_OEE: {
        type: Number,
        default: ''
    },

    time_after_production: {
        type: Date,
        default: Date.now
    },

    time_before_production: {
        type: Date,
        default: ''
    },
    description: {
        type: Date,
        default: Date.now
    },
});

var production_centers = new mongoose.model('production_center', schema);

module.exports = production_centers;