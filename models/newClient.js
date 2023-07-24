const mongoose = require("mongoose")
const Schema = mongoose.Schema

const newClientSchema = new Schema({
    username: String,
    email: String,
    street: String,
    city: String,
    state: String,
    zip: String,
    employer: String,
    industry: String,
    avatar: String,
    password: String,
    birthdate: String,
    registeredAt: String,
    stillClient: Boolean
}, {
 timestamps: true   
})

module.exports = mongoose.model("NewClient", newClientSchema)