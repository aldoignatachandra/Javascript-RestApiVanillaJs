const Product = require("../models/productModel");

//Function Validator For @route -> GET /api/products/:id
async function validatorGetById(data) {
  let message = [];

  //Check Empty Field
  if (!data) {
    message.push("Product Not Found");
  }

  return message;
}

//Function Validator For @route -> POST /api/products
async function validatorCreate(data) {
  let message = [];

  //Check Empty Field
  if (!data.title) {
    message.push("Product Title Should Not Be Empty");
  }
  if (!data.description) {
    message.push("Product Description Should Not Be Empty");
  }
  if (!data.price) {
    message.push("Product Price Should Not Be Empty");
  }
  if (data.price < 0) {
    message.push("Product Price Invalid Value");
  }

  //Check Duplicate Title
  const productTitleChecker = await Product.findByTitle(data.title);
  if (productTitleChecker) {
    message.push(`Product Title ( ${data.title} ) Already Exist In Database`);
  }

  return message;
}

//Function Validator For @route -> PUT /api/products/:id
async function validatorUpdate(data) {
  let message = [];

  if (!data) {
    message.push("Product Not Found");
  }

  return message;
}

//Function Validator For @route -> DELETE /api/products/:id
async function validatorDelete(data) {
  let message = [];

  //Check Empty Field
  if (!data) {
    message.push("Product Not Found");
  }

  return message;
}

module.exports = {
  validatorGetById,
  validatorCreate,
  validatorUpdate,
  validatorDelete,
};
