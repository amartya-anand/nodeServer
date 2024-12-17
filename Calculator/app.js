const http = require("http");
const { requestHandler } = require("./handler");
const server = http.createServer(requestHandler);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port address http://localhost:${PORT}`);
});
