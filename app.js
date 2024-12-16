const http = require("http");

//Server created
const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>MERN</title></head>");
    res.write("<body><h1>Mongo / Express / React / Node</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>DevOps</title></head>");
    res.write("<body><h1>Node</h1></body>");
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>MERN</title></head>");
  res.write("<body><h1>Mongo / Express / React / Node</h1></body>");
  res.write("</html>");
  res.end();
  // process.exit(); //Stops event loop
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
