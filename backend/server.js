require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const contactRoutes = require("./routes/contactRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Environment Variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Routes
app.use("/contacts", contactRoutes);

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
