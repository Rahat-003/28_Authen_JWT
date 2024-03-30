const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String, // default required: false
    status: {
        type: String,
        enum: ["active", "inactive"],
    },
    date: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
});

// custom function add inside schema. Instance methods
todoSchema.methods = {
    findActive: function () {
        return mongoose.model("Todo").find({ status: "inactive" }); // return promise
    },
    // Model.find() no longer accepts a callback
    // findActiveCallback: function (cb) {
    //   return mongoose.model("Todo").find({ status: 'inactive' }, cb);
    // },
};

// static methods
todoSchema.statics = {
    findByJS: function () {
        return this.find({ title: /js/i });
        // here this = mongoose.model('Todo')
        // /js/i case insensitive regex for "js". title e any "js" substring thakle return krbe
    },
};

// query helpers
todoSchema.query = {
    byLanguage: function (language) {
        return this.find({ title: new RegExp(language, "i") });
    },
};

module.exports = todoSchema;
