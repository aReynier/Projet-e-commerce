const ProductModel = require("../models/product.model");

module.exports.getProducts = async (req, res) => {
  const product = await ProductModel.find();
  res.status(200).json(product);
};

module.exports.setProducts = async (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ message: "Merci d'ajouter un nom" });
  }

  const post = await ProductModel.create({
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
    type: req.body.type,
  });
  res.status(200).json(post);
};

module.exports.editProduct = async (req, res) => {
  const product = await ProductModel.findById(req.params.id);

  if (!product) {
    res.status(400).json({ message: "ce produit n'existe pas" });
  }

  const updateProduct = await ProductModel.findByIdAndUpdate(
    product,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updateProduct);
};

module.exports.deleteProduct = async (req, res) => {
  const product = await ProductModel.findById(req.params.id);

  if (!product) {
    res.status(400).json({ message: "ce produit n'existe pas" });
  }

  await product.deleteOne();
  res.status(200).json("the following product is deleted" + req.params.id);
};
