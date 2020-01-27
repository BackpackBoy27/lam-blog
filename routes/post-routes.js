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

router.delete("/delete/:id", (req, res) => {
    db.Post.destroy({
        where: {
            id: req.params.id
        }
    });
});

module.exports = router;
