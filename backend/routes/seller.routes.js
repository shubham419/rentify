const router = require("express").Router();
const { validateSchema } = require("../middlewares/validate.middleware");
const { sellerValidationSchema } = require("../validations/property.validator")
const {postProperty, getProperties, updateProperty, deleteProperty } = require("../controllers/seller.controller")

const validateProperty = validateSchema(sellerValidationSchema);

router.post("/addproperty", postProperty);
router.get("/property", getProperties);
router.put("/property/:email/:propertyId", updateProperty);
router.delete("/property/:email/:propertyId", deleteProperty);

module.exports = router;