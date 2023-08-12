const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    password: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);