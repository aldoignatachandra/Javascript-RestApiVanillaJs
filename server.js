const http = require("http");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("./controllers/productController");

//Create Server HTTP
const server = http.createServer((req, res) => {
  //Route For Get All Data
  if (req.url === "/api/products" && req.method === "GET") {
    getProducts(req, res);
  }
  //Route For Get Spesific Data
  else if (req.url.match(/\/api\/products/) && req.method === "GET") {
    const id = req.url.split("/")[3];
    getProduct(req, res, id);
  }
  //Route For Create New Data
  else if (req.url === "/api/products" && req.method === "POST") {
    createProduct(req, res);
  }
  //Route For Update Spesific Data
  else if (req.url.match(/\/api\/products/) && req.method === "PUT") {
    const id = req.url.split("/")[3];
    updateProduct(req, res, id);
  }
  //Router For Deleted Spesific Data
  else if (req.url.match(/\/api\/products/) && req.method === "DELETE") {
    const id = req.url.split("/")[3];
    deleteProduct(req, res, id);
  }
  //Return For Undefined Route
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route Not Found" }));
  }
});

//Define Port For Server
const PORT = process.env.PORT || 5000;

//Execute Server In Selected Port
server.listen(PORT, () => console.log(`Server Running On Port ${PORT}`));
