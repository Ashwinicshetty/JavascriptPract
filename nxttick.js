console.log("Start");

process.nextTick(() => {
  console.log("Next tick callback");
});

console.log("End");

//
console.log("hi");
setImmediate(() => {
  console.log("setImmediate callback");
});
process.nextTick(() => {
  console.log("Next tick callback for 2nd time");
});
console.log("bye");
