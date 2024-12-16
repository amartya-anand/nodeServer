const http = require("http");

//Server created
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  process.exit(); //Stops event loop
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
