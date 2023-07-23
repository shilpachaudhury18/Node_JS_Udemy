const { createReadStream } = require("fs");



const stream = createReadStream("./content/newFile.txt", {
  highWaterMark: 9000,
  encodeURI: "utf8",
});

stream.on("data",(result) => {
  console.log(result);
})
stream.on("error",(error)=> console.log(error, "error"));