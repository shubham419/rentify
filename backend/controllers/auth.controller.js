const AuthServices = require("../services/auth.service");

const AuthServicesInstance = new AuthServices();

const postSignup = async (req, res) => {
  try {
    const result = await AuthServicesInstance.signup(req.body);
    res.json(result);
  } catch (error) {
    console.log("postSignup ~ error:-", error)
    
    if (error.code === 11000) {
      res.status(409).json({
        message: "Failed to create new user",
        reason: "Already Exists in DB",
      });
    } else {
      res.status(500).json({ message: "Failed to create new user", error });
    }
  }
};

const postLogin = async (req, res) => {
  try {
    const result = await AuthServicesInstance.login(req.body);
    console.log("postLogin ~ result:-", result)
    
    res.send(result);
  } catch (error) {
    res.status(500).json({ message: "Failed to access user", error });
  }
};

module.exports = { postSignup, postLogin };
