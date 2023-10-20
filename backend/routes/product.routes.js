const express = require("express");
const {
  setProducts,
  getProducts,
  editProduct,
  deleteProduct,
} = require("../controllers/product.controller");
const router = express.Router();

router.get("/", getProducts);
router.post("/", setProducts);
router.put("/:id", editProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
