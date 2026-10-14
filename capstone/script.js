console.log("--- Initializing Inventory System ---");

const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 }
];

// Input + validation loop
let newName, newPrice;
while (true) {
  newName = prompt("Enter product name:");
  newPrice = Number(prompt("Enter product price:"));

  if (!newName || newName.trim() === "") {
    console.log("Name missing, try again.");
    continue;
  }
  if (isNaN(newPrice) || newPrice <= 0) {
    console.log("Invalid price, try again.");
    continue;
  }
  break;
}
inventory.push({ name: newName.trim(), price: newPrice });
console.log('[Prompt executed: User adds "' + newName.trim() + '" at "$' + newPrice + '"]');

// Category using switch
function getCategory(price) {
  switch (true) {
    case price >= 500: return "Premium";
    case price >= 100: return "Standard";
    default: return "Budget";
  }
}

// Functions with local scope
function totalValue(items) {
  let sum = 0;
  for (const item of items) sum += item.price;
  return sum;
}
const applyTax = (amount, rate = 0) => amount + (amount * rate) / 100;
const applyDiscount = (amount, pct = 0) => amount - (amount * pct) / 100;

console.log("\n--- Processing Inventory Roster (forEach) ---");
inventory.forEach(item =>
  console.log("* Item: " + item.name + " ($" + item.price + ") -> Category: " + getCategory(item.price))
);

console.log("\n--- Financial Analytics ---");
const total = totalValue(inventory);
console.log("Total Inventory Value: $" + total);
console.log("Filtered Affordable Items (Under $200):", inventory.filter(i => i.price < 200).map(i => i.name));
console.log("Formatted Report List:", inventory.map(i => i.name.toUpperCase() + ": $" + i.price));
console.log("Total with 10% tax: $" + applyTax(total, 10));
console.log("Total with 5% discount: $" + applyDiscount(total, 5));