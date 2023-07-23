const { log } = require("console");
const { writeFileSync,createReadStream } = require("fs");


// for (let i = 0; i < 10000; i++){
//   writeFileSync("./content/newFile.txt",`write hello ${i}`,{flag:"a"});
// }
const stream = createReadStream("./content/newFile.txt")

stream.on("data",(result) => {
console.log("stream", result);
  
})