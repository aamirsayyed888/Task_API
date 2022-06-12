const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    Name : {
        type: String,
        required: true
    }
}, { timestamps: true });

const category = mongoose.model("categories", CategorySchema);

module.exports = category;