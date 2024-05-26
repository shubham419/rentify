const Seller = require("../models/seller.model");

class SellerService {
  addProperty = async ({ email, firstName, phone, property }) => {
    console.log(
      "SellerService ~ addProperty= ~ email, firstName, phone, property:-",
      email,
      firstName,
      phone,
      property
    );
    try {
      let seller = await Seller.findOne({ email });
      console.log("SellerService ~ addProperty= ~ seller:-", seller);

      if (!seller) {
        seller = new Seller({
          email,
          firstName,
          phone,
          properties: [property],
        });
      } else {
        seller.properties.push(property);
      }
      await seller.save();
      return seller;
    } catch (error) {
      throw error;
    }
  };

  getProperty = async ({ email }) => {
    try {
      const seller = await Seller.findOne({ email });

      if (!seller) {
        throw new Error("Seller not found");
      }

      return seller.properties;
    } catch (error) {
      throw error;
    }
  };

  updateProperty = async ({ email, propertyId, property }) => {
    try {
      const seller = await Seller.findOne({ email });

      if (!seller) {
        throw new Error("Seller not found");
      }

      const propertyIndex = seller.properties.findIndex(
        (p) => p._id.toString() === propertyId
      );

      if (propertyIndex === -1) {
        throw new Error("Property not found");
      }

      seller.properties[propertyIndex] = {
        ...seller.properties[propertyIndex]._doc,
        ...property,
        updatedAt: Date.now(),
      };

      await seller.save();
      return seller.properties[propertyIndex];
    } catch (error) {
      throw error;
    }
  };

  deleteProperty = async ({ email, propertyId }) => {
    try {
      const seller = await Seller.findOne({ email });

      if (!seller) {
        throw new Error("Seller not found");
      }

      const propertyIndex = seller.properties.findIndex(
        (p) => p._id.toString() === propertyId
      );

      if (propertyIndex === -1) {
        throw new Error("Property not found");
      }

      seller.properties.splice(propertyIndex, 1);

      await seller.save();
      return { message: "Property deleted successfully" };
    } catch (error) {
      throw error;
    }
  };
}

module.exports = SellerService;
