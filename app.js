const express = require("express");
const mongoose = require("mongoose");

const app = express();

// connect to db
mongoose.connect(
  "mongodb://localhost:27017/Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connection to mongodb database was successful!");
  }
);

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// routes
app.use(require("./routes/index"))
app.use(require("./routes/compose"))
app.use(require("./routes/blog"))


//localhost:3000
app.listen(3000, () => console.log("Server started listening on port: 3000"));
