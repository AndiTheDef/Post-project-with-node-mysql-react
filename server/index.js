const express = require("express");
const cors = require("cors");

const app = express();
const db = require("./models");

app.use(cors());
app.use(express.json());

//Routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

const commentsRouter = require("./routes/Comments");
app.use("/comments", commentsRouter);

db.sequelize.sync().then(() => {
  app.listen("3001", () => {
    console.log("listening on http://localhost:3001");
  });
});
