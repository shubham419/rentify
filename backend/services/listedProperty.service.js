const ListedProperty = require("../models/listedProperty.model");

class ListedPropertyService {
  async addProperty(propertyData) {
    try {
      const listedProperty = new ListedProperty(propertyData);
      return await listedProperty.save();
    } catch (error) {
      throw error;
    }
  }

  async getAllProperties() {
    try {
      return await ListedProperty.find();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ListedPropertyService;
