let products = require("../data/products");
const { v4: uuidv4 } = require("uuid");
const { writeDataToFile } = require("../utils/utils");

//Function For Get All Data
function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

//Function For Get Spesific Data Using ID
function findById(id) {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id === id);
    resolve(product);
  });
}

//Function For Get Spesific Data Using Title
function findByTitle(title) {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.title === title);
    resolve(product);
  });
}

//Function For Create New Data
function create(product) {
  return new Promise((resolve, reject) => {
    const newProduct = { id: uuidv4(), ...product };
    products.push(newProduct);
    writeDataToFile("./data/products.json", products);
    resolve(newProduct);
  });
}

//Function For Update Spesific Data
function update(id, product) {
  return new Promise((resolve, reject) => {
    const index = products.findIndex((p) => p.id === id);

    products[index] = { id, ...product };

    writeDataToFile("./data/products.json", products);
    resolve(products[index]);
  });
}

//Function For Deleted Spesific Data
function remove(id) {
  return new Promise((resolve, reject) => {
    products = products.filter((p) => p.id !== id);
    writeDataToFile("./data/products.json", products);
    resolve();
  });
}

module.exports = {
  findAll,
  findById,
  findByTitle,
  create,
  update,
  remove,
};
