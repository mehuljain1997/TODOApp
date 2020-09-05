const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    PId: Number,
    PType: String,
    PName: String,
    
}, {
    timestamps: false
});

module.exports = mongoose.model('Product', ProductSchema);