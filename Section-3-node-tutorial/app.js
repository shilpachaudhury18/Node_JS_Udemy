// CommonJS - Every file is a module (by default)
// Module - Encapsulated Code (Only share minimum)
// devDependency npm i modulename --save-dev / -D

const { isUtf8 } = require("buffer");
const { Vin, John } = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternativeFlow");
console.log(data, "data");
require("./7-mind-grenede");

const _ = require("lodash");
const { log } = require("console");

const arr = [1, 2, [3, 4, [5, 6]]];
console.log(_.flattenDeep(arr), "arr");
// console.log(arr.flatMap(), "arrflat");
console.log(arr);
