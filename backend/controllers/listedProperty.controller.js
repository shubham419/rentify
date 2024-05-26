const ListedPropertyService = require("../services/listedProperty.service");

const listedPropertyService = new ListedPropertyService();

const postProperty = async (req, res) => {
  console.log("postProperty ~ req:-", req.body)
  
  try {
    const property = await listedPropertyService.addProperty(req.body);
    res.status(201).json(property);
  } catch (error) {
    console.error("postProperty ~ error:", error);
    res.status(500).json({ message: "Failed to add property", error });
  }
};

const getAllProperties = async (req, res) => {
  try {
    const properties = await listedPropertyService.getAllProperties();
    res.status(200).json(properties);
  } catch (error) {
    console.error("getAllProperties ~ error:", error);
    res.status(500).json({ message: "Failed to retrieve properties", error });
  }
};

module.exports = { postProperty, getAllProperties };
