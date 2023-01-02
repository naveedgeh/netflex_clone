const mongoose = require("mongoose");
const express = require("express");

const userRoutes = require("./router/user.route");
const movieRoutes = require("./router/movie.route");

const app = express();
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost:27017/moiveclub")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB is not connected", err);
  });
app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", movieRoutes);

const port = 3232;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
