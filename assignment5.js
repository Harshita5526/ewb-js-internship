function areaStandard(length = 5, width = 4) {
  return length * width;
}
const areaArrow = (length = 5, width = 4) => length * width;

console.log("Standard Function Area (Default 5x4): " + areaStandard());
console.log("Arrow Function Area (Custom 10x3): " + areaArrow(10, 3));

// Function scope demo
function test() {
  var funcVar = "inside function";
}
test();
try {
  console.log(funcVar);
} catch (e) {
  console.log("Function Scope Error: " + e.name + ": " + e.message);
}

// Block scope demo
try {
  {
    let blockVar = "inside block";
  }
  console.log(blockVar);
} catch (e) {
  console.log("Scope Test Error: " + e.name + ": " + e.message + " (when accessed outside block)");
}