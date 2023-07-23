const http  = require("http");
const { readFileSync, createReadStream } = require("fs");


http.createServer((req, res) => {
  // const stream = readFileSync("./content/newFile.txt", "utf8")
  // res.end(stream)
  const stream = createReadStream("./content/newFile.txt", "utf8");

  stream.on("open", () => {
    stream.pipe(res)
  });
  stream.on("error", () => {
    stream.pipe(err)
  })
  
}).listen(5000)
