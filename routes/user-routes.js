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
        res.json(newUser);
    });
});

// get author by ID
router.get("/:id", (req, res) => {
    db.User.findAll({
        where: {
            id: req.params.id
        }
    }).then(users => res.json(users));
});

module.exports = router;
