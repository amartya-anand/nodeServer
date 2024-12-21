const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("First dummy middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("Second dummy middleware", req.url, req.method);
  next();
});

// app.use((req, res, next) => {
//   console.log("First dummy middleware", req.url, req.method);
//   res.send("<h1>Welcome</h1>");
// });

app.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.send("<h1>Welcome</h1>");
});

app.get("/contact-us", (req, res, next) => {
  console.log("Handling Contact-us", req.url, req.method);
  res.send(`<h1>Give your details here</h1>
		<form action = "/contact-us" method = POST>
		<input type = "text" name = "name" placeholder="Enter your name"/><br>
		<input type = "text" name = "email" placeholder="Enter your email"/><br>
		<input type = "Submit"/>
		</form>
		`);
});

app.post("/contact-us", (req, res, next) => {
  console.log("Handling /conatct-us for POST", req.url, req.method);
  res.send(`<h1>We will contact you shortly</h1>`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port address http://localhost:${PORT}`);
});
