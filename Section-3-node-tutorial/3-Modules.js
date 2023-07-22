const { Vin, John } = require("./utils/User");
const{SayHi}=require("./utils/5-utils")

const SayHi = (name) => {
    console.log(`hi Hero... ${name}`);
}

SayHi(John);
SayHi(Vin);