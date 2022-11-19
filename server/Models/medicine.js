let mongoose = require('mongoose');
// create a medicine model
let medicineModel = mongoose.Schema({
name:String,
Type:String,
price:Number,
amount:Number
},
    {

    collection: "medicines"
    }
);
module.exports = mongoose.model('medicine', medicineModel);
