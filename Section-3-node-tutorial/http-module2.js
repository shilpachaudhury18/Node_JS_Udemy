const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("This is Shilpa");
  }
  if (req.url === "/about") {
    return res.end("I am from K  O L K A T A");
  }
  res.end(`<p>This not my page</p><a href="/"> Back</a>`);
});

server.listen(5000);
