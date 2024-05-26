const router = require("express").Router();
const { validateSchema } = require("../middlewares/validate.middleware");
const { userValidationSchema } = require("../validations/user.validator");
const { loginBodyValidatorSchema } = require("../validations/auth.validator");
const { postSignup, postLogin } = require("../controllers/auth.controller");


const validateUser = validateSchema(userValidationSchema);
const validateLoginBody = validateSchema(loginBodyValidatorSchema);


router.post("/signup", validateUser ,postSignup);
router.post("/login", validateLoginBody, postLogin);

module.exports = router;