require("dotenv").config();
//import
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./auth_routes/user.controllers");
//db connection
mongoose.connect(process.env.MONGO_DB_URI);
mongoose.connection.on("connected", () => {
  console.log("DB connect");
});
mongoose.connection.on("error", (err) => {
  console.log("mongoose failed with", err);
});

//import routes
const userRouter = require("./auth_routes/user.controllers");
const commentRouter = require("./routes/comment.routes");
const impressionRouter = require("./routes/impression.routes");
const messageRoutes =require("./routes/message.routes")
const postRoutes=require("./routes/post.routes")
const profileRoutes=require("./routes/profile.routes")
//middelware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes middleware
app.use("/api/user", userRouter);
app.use("/api/comment", commentRouter);
app.use("/api/impression", impressionRouter);
app.use("/api/message", messageRoutes)
app.use("/api/post",postRoutes)
app.use("/api/profile",profileRoutes)
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server in running on http:/localhost:${port}`);
});
