const EventEmitter = require("events");//event handling

const customEmitter = new EventEmitter();

customEmitter.on("response", () => {
  console.log("Received");
})
customEmitter.emit("response")