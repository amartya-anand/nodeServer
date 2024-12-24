//Core module
const path = require("path");
// External module
const express = require("express");

//Local module
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtils");
const app = express();

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);
app.use((req, res, next) => {
  res.status(404).res.sendFile(path.join(rootDir, "views", "404.html"));
});

app.get("/", (req, res, next) => {
  res.send(`<h1>Welcome to Airbnb</h1>
  <a href="/add-home">Add Home</a>`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
