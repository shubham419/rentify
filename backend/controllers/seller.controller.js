const SellerService = require("../services/seller.service")

const SellerServiceInstance = new SellerService();

const postProperty = async (req, res) => {
  try {
    console.log("postProperty ~ req.body:-", req.body)
    
    const result = await SellerServiceInstance.addProperty(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error("postProperty ~ error:", error);
    res.status(500).json({ message: "Failed to add property", error });
  }
};

const getProperties = async (req, res) => {
  try {
    const { email } = req.query;
    const properties = await SellerServiceInstance.getProperty({ email });
    res.status(200).json(properties);
  } catch (error) {
    console.error("getProperties ~ error:", error);
    res.status(500).json({ message: "Failed to retrieve properties", error });
  }
};


const updateProperty = async (req, res) => {
  try {
    const { email, propertyId } = req.params;
    const result = await SellerServiceInstance.updateProperty({ email, propertyId, property: req.body });
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Failed to update property", error });
  }
};

const deleteProperty = async (req, res) => {
  try {
    const { email, propertyId } = req.params;
    const result = await SellerServiceInstance.deleteProperty({ email, propertyId });
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Failed to delete property", error });
  }
};


module.exports = { postProperty, getProperties, updateProperty, deleteProperty };
