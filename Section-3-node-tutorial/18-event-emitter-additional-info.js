const EventEmitter = require("events");

const customEmitter = new EventEmitter();
customEmitter.on("response", () => {
  console.log("response")
})
customEmitter.on("response", (name, id) => {
  console.log("response", ` This is ${name} and ${id}`);
});

//eventemitter only listens when an event is emitted
// customEmitter.emit("response");


customEmitter.emit("response","Sil","00")