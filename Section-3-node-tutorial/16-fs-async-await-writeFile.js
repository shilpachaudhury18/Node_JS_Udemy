const { readFile, writeFile } = require("fs").promises
const util = require("util");

//shorter way to use promise in node js using util
const readFilePromise = util.promisify(readFile);
const WriteFilePromise = util.promisify(writeFile);

const startFile = async () => {
  try {
    // const first = await readFilePromise("./content/first.txt", "utf8");
    // const second = await readFilePromise("./content/second.txt", "utf8");
    const first = await readFile("./content/first.txt", "utf8"
    );
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/writeFIleText2.txt",
      `Write the async await ${first}${second}`
    );
  } catch (err) {
    console.log(err, "err");
  }
};

startFile();
