const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// middleware
app.use(bodyParser.json());

// define routes
const productRoutes = require("./routes/productRoutes");
app.use("/products", productRoutes);

// start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
