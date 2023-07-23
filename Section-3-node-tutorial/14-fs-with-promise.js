const { readFile } = require("fs");

const getData = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};
getData("./content/first.txt")
  .then((req) => console.log(req, "req"))
  .catch((err) => console.log(err));
