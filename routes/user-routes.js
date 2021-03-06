const express = require("express");
const router = express.Router();
const db = require("../models");

// Get all Authors
router.get("/all", (req, res) => {
    db.User.findAll({
        include: [db.Post]
    }).then(users => res.json(users));
});

// Register new Author
router.post("/new", (req, res) => {
    db.User.create({
        username: req.body.username
    }).then(newUser => {
        res.send(newUser);
    });
});

// get author by ID
router.get("/find/:id", (req, res) => {
    db.User.findAll({
        where: {
            id: req.params.id
        }
    }).then(user => res.send(user));
});

module.exports = router;
