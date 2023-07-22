const { isUtf8 } = require("buffer");
const { Vin, John } = require("./4-names");
const sayHi=require("./5-utils")
const  data  = require("./6-alternativeFlow");
console.log(data,"data");
require("./7-mind-grenede");

// sayHi(John);
// sayHi(Vin);

const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./content/first.txt", "utf8")
const second = readFileSync("./content/second.txt", "utf8");
console.log("first and second", first, second);
writeFileSync("content/result.txt", `the text is in${first}${second}`,{flag:"a"}
)

