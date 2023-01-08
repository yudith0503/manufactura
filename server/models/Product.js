var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String, 
        required:true          
    },
    sold: {
        type: Boolean,
        default:''
    },
    bougth: {
        type: Boolean,
        default:''
    },
    product_type: {
        type: Selection,
        required:true
    },
    category: {
        type: Object,
        required:true
    },
    internal_reference: {
        type: String,
        default:''
    },
    barcode: {
        type: String,
        default:''
    },
    sale_price: {
        type: Number,
        default:''
    },
    cost_price: {
        type: Number,
        default:''
    },
    variants: {
        type: Object,
        default:''
    },
    photo: {
        type: Buffer,
        default:''
    },
    description: {
        type: String,
        default:''
    },
    volume: {
        type: Number,
        default:''
    },
    weight: {
        type: Number,
        default:''
    },
    unit_measure: {
        type: Object,
        default:''
    },
    unit_measure_purchase: {
        type: Object,
        default:''
    },                       
});

var product = new mongoose.model('Product', schema);

module.exports = product;