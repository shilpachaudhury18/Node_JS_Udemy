// const { log } = require("console");
const { readFile, writeFile } = require("fs");

const path = require("path");
const filePath1 = path.join("./content", "first.txt");
const filePath2 = path.join("./content", "second.txt");
const fileName3 = path.join("./content", "result-async.txt");
const filePathBase1 = path.basename(filePath1);
const filePathBase2 = path.basename(filePath2);

console.log("filePath1", filePath1, filePathBase1);
console.log("filePath2", filePath2, filePathBase2);

readFile(filePath1, "utf8", (err, result) => {
  if (err) return console.log("err", err);
  console.log("result", result);
  const first = result;

  readFile(filePath2, "utf8", (err, result) => {
    if (err) return console.log("result", result);
    console.log("err", err);
    const second = result;

    writeFile(
      fileName3,
      `this first value is ${first}${second}`,
      (err, result) => {
        if (err) console.log(err);
        return result;
      }
    );
  });
});
