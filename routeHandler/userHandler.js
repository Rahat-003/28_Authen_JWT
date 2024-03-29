const express = require("express");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const router = express.Router();
const userSchema = require("../schemas/todoSchema");
const User = new mongoose.model("User", userSchema); // it will create Todos. so model name should be in singular number.

// api er current root = localhost:3000/user/

// SignUp
router.post("/signup", async (req, res) => {
    // Error here
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
            name: req.body.name,
            username: req.body.username,
            password: hashedPassword,
        });
        await newUser.save();
        res.status(200).send({
            message: "Signup was successfull",
        });
    } catch (err) {
        res.status(500).send("Signup failed");
    }
});

module.exports = router;
