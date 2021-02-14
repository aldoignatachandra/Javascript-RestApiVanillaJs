const Product = require("../models/productModel");
const { getPostData } = require("../utils/utils");
const {
  validatorGetById,
  validatorCreate,
  validatorUpdate,
  validatorDelete,
} = require("../utils/validator");

// @desc -> Gets All Products
// @route -> GET /api/products
async function getProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
}

// @desc -> Gets Single Products
// @route -> GET /api/products/:id
async function getProduct(req, res, id) {
  try {
    const product = await Product.findById(id);
    let error = await validatorGetById(product);

    res.writeHead(error.length > 0 ? 404 : 200, {
      "Content-Type": "application/json",
    });
    res.end(
      error.length > 0
        ? JSON.stringify({ message: error })
        : JSON.stringify(product)
    );
  } catch (error) {
    console.log(error);
  }
}

// @desc -> Create a Product
// @route -> POST /api/products
async function createProduct(req, res) {
  try {
    const body = await getPostData(req);

    const { title, description, price } = JSON.parse(body);

    const product = {
      title,
      description,
      price,
    };

    let error = await validatorCreate(product);

    if (error.length > 0) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: error }));
    } else {
      const newProduct = await Product.create(product);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newProduct));
    }
  } catch (error) {
    console.log(error);
  }
}

// @desc -> UPdate a Product
// @route -> PUT /api/products/:id
async function updateProduct(req, res, id) {
  try {
    const product = await Product.findById(id);
    let error = await validatorUpdate(product);

    if (error.length > 0) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: error }));
    } else {
      const body = await getPostData(req);

      const { title, description, price } = JSON.parse(body);

      const productData = {
        title: title || product.title,
        description: description || product.description,
        price: price || product.price,
      };

      const updProduct = await Product.update(id, productData);
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(updProduct));
    }
  } catch (error) {
    console.log(error);
  }
}

// @desc -> Delete Single Products
// @route -> DELETE /api/products/:id
async function deleteProduct(req, res, id) {
  try {
    const product = await Product.findById(id);
    let error = await validatorDelete(product);

    if (error.length > 0) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: error }));
    } else {
      await Product.remove(id);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: `Product ${id} removed` }));
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
