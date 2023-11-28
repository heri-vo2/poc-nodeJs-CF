const mongoose = require('mongoose');
const Address = require("./Address");
// Define the User schema
const inspectionSchema = new mongoose.Schema({
    _id: {
        type: Object,
    },
    certificate_number: {
        type: Number
    },
    business_name: {
        type: String
    },
    date: {
        type: String
    },
    result: {
        type: String
    },
    sector: {
        type: String
    },
    address: {
        type: Address
    },
    ref: {
        type: Number,
        required: true
    }
});
// Create the User model from the schema
const Inspection = mongoose.model('Inspection', inspectionSchema);
module.exports = Inspection;
