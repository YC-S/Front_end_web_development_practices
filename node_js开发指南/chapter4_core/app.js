var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Node.js</h1>");
    res.end("<h3>Hello World!</h3>");
  })
  .listen(3000);

console.log("Http Server is listening to port 3000");
