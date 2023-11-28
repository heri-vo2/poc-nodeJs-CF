const mongoose = require('mongoose');
// Define the User schema
const addressSchema = new mongoose.Schema({
    city: {
        type: String,
    },
    street: {
        type: String
    },
    zip: {
        type: String
    },
    number: {
        type: String
    }
});
// Create the User model from the schema
const Address = mongoose.model('Address', addressSchema);
module.exports = Address;
