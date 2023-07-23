const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./index.html");
const server = http.createServer((req, res) => {
  // console.log(req.method,req.url);

  const url = req.url;
  const header = { "content-type": "text/html" };
  if (url === "/") {
    res.writeHead(200, header);
    res.write(homePage);
    console.log("first");
    res.end(" ");
  } else if (url === "/about") {
    res.writeHead(200, header);
    res.write(`<h1>About page</h1>`);
    res.end(" ");
  } else {
    res.writeHead(404, header);
    res.write(`<h1>Page not found</h1>`);
    res.end(" ");
  }
});

server.listen(5000);
