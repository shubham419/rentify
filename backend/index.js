require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth.routes");
const sellerRoutes = require("./routes/seller.routes");
const propertyRoutes = require("./routes/listedProperty.routes");

const cors = require("cors");

const app = express();
const PORT = 8082;
const DB_URI = process.env.MONGO_URI;

mongoose
  .connect(`${DB_URI}`)
  .then(() => console.log("Connected to DB at", DB_URI))
  .catch((e) => console.log("Failed to connect to DB", e));


app.use(express.json());

app.use(cors({
  origin:  process.env.CLIENT_ORIGIN || "http://localhost:5173",
  allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept",
  credentials: true,
}));

app.use("/auth", authRoutes);
app.use("/seller", sellerRoutes);
app.use("/property", propertyRoutes);


app.get("/", (req, res) => {
  res.write("welcome to rentify server");
  res.end();
})


app.listen(PORT, () => {
  console.log("Listening at", PORT);
});
