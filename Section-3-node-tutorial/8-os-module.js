const { log } = require("console");
const os = require("os")
console.log(os.uptime());//method returns the system uptime in second


const user = os.userInfo()
console.log(user);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),

}

console.log(currentOs);
console.log(os.version());
