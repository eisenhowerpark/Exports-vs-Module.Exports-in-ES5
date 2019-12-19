exports = function () {
    console.log("helllllo");
    
}
// Here, exports is changed from an empty object to a function containing the console.log.

console.log(exports);
console.log(module.exports);
// Exports is now a function.
// module.exports is still an empty object.
// In JavaScript, when a variable is set equal to a value, it points to a new object.
// Even though exports and module.exports may point to the same object in memory, the
// "pass by reference" is broken when exports is made equal to a value, and therefore a new spot in
// memory.