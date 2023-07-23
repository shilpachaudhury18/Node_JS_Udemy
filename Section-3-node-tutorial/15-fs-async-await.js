const { log } = require("console");

const { readFile } = require("fs");


const getData = (path) => {
  return new Promise((resolve, reject) => {
    return readFile(path, "utf8", (err, res) => {
      if (err) {
        reject(err) 
      } else {
        resolve(res)
      }
    });
  });
};

const startGetData =async() => {
  try {
    const first = await getData("./content/first.txt");
    const second = await getData("./content/second.txt")
    console.log(first,second,"first and second");
    
  } catch (err) {
    console.log(err);
  }
}
startGetData();
