const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/all", (req, res) => {
    db.Post.findAll().then(posts => {
        res.json(posts);
    });
});

router.post("/new", (req, res) => {
    db.Post.create({
        title: req.body.title,
        body: req.body.body,
        UserId: req.body.UserId
    }).then(post => {
        res.json(post);
    });
});

module.exports = router;
