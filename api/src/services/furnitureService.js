import Furniture from "../models/Furniture.js";

export default {
  getAll(filter) {
    return Furniture.find(filter).select({
      description: true,
      price: true,
      img: true,
    });
  },

  getOne(id) {
    return Furniture.findById(id);
  },

  create(furnitureData, ownerId) {
    return Furniture.create({
      ...furnitureData,
      _ownerId: ownerId,
    });
  },

  update(furnitureId, furnitureData) {
    return Furniture.findByIdAndUpdate(furnitureId, furnitureData);
  },

  delete(furnitureId) {
    return Furniture.findByIdAndDelete(furnitureId);
  },
};
