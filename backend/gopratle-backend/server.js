const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const requirementRoutes = require("./routes/requirementRoutes");

connectDB();


const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("GoPratle API is running");
});

app.use("/api/requirements", requirementRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("MongoDB connected");
  console.log(`Server running on port ${PORT}`);
});