const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/university')

module.exports = {
    User: mongoose.model("users", {
        email: String,
        pwd: String
    }),
    ObjectId: mongoose.Types.ObjectId
}
