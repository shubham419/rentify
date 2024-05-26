const router = require("express").Router();

const {postProperty, getAllProperties} = require("../controllers/listedProperty.controller")

router.post("/post", postProperty);
router.get("/get", getAllProperties );

module.exports = router;