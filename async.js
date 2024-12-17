const fs = require("fs");
console.log("1.Script starts");

console.log("2.Start of sync script");
const dataSync = fs.readFileSync("output.txt", "utf8");
console.log("3.Synchronous read complete");

console.log("4.Reading files asynchronously");
fs.readFile("output.txt", "utf8", (err, dataAsync) => {
  if (err) throw err;
  console.log("6.Async read complete");
});

console.log("5.Execution complete");
