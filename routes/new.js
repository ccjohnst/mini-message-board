const express = require("express");
const router = express.Router();

// GET new-message form
router.get("/", function (req, res, next) {
	res.render("form", { title: "New message" });
});

module.exports = router;
