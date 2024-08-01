const mongoose = require ("mongoose");

const UserSchema = new mongoose.Schema ({
    name: 
    {
        type: String,
        required: true,
        unique: true
    },
    contact:
    {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true
    }
})

const userModel = mongoose.model('admin', UserSchema)
module.exports = {userModel}