const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    tickets: {
        required: true,
        type: Number
    }
});

module.exports = mongoose.model("Data", dataSchema);