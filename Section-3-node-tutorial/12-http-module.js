const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("This is the home page");
  }
  if (req.url === "/about") {
    return res.end("This is the about page");
  }
  res.end(`<h1>Opps!</h1><p>Its end</p><a href="/">Back to</a>`);
});

server.listen(5000);
