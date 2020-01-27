const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api", (req, res) => {
    res.send("You requested an api service...");
    console.log("You have got an api request");
});

router.get("/users/search", (req, res) => {
    db.User.findAll({}).then(user => {
        res.send(user);
    });
});

router.post("/users/new", (req, res) => {
    db.User.create({
        name: req.body.name
    }).then(() => {
        res.end();
    });
});

module.exports = router;
