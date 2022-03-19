require("dotenv").config();
//import
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//db connection
mongoose.connect(process.env.MONGO_DB_URI);
mongoose.connection.on("connected", () => {
  console.log("DB connect");
});
mongoose.connection.on("error", (err) => {
  console.log("mongoose failed with", err);
});

//import routes
const userRouter = require("./routes/user.routes");
//const commentRouter = require("./routes/comment.routes");
//const reactRouter = require("./routes/react.routes");
const messageRoutes = require("./routes/message.routes");
const postRoutes = require("./routes/post.routes");
const relationshipRouter = require("./routes/relationship.routes");

//middelware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes middleware
app.use("/api/users", userRouter);
//app.use("/api/comments", commentRouter);
//app.use("/api/reacts", reactRouter);
app.use("/api/messages", messageRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/friends",relationshipRouter)

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server in running on http:/localhost:${port}`);
});
