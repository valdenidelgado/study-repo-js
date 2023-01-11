const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 5000;

// config json response
app.use(express.json());

// solve cors
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// public folder for images
app.use(express.static("public"));

// routes

// server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
