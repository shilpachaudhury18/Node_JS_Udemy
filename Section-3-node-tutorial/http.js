const http = require("http");

const server = http.createServer((req,res) => {
  res.write("hello we are in server 5000");
  res.end();
});

server.listen(5000);
