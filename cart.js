const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) { // Bug: <= should be <
    total += cartItems.price; // Bug: cartItems[i] is undefined on the last iteration ; SET BREAKPOINT
  }
  return total;
}

/*
Uncaught TypeError: cartItems[i] is undefined
    calculateTotal http://127.0.0.1:5500/cart.js:10
    <anonymous> http://127.0.0.1:5500/cart.js:33

When the browser tool console is opened, this ^^ immediately pops up. How do we fix it?
*/

function applyDiscount(total, discountRate) {
  return total - total * discountRate; // Bug: Missing validation for discountRate ; SET BREAKPOINT
}

function generateReceipt(cartItems, total) {
  let receipt = "Items:\n";
  cartItems.forEach(item => {
    receipt += `${item.name}: $${item.price}\n`;
  });
  receipt += `Total: $${total.toFixed(2)}`; // Bug: total may not be a number ; SET BREAKPOINT
  debugger;
  return receipt;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;

try {

} catch (error) {
  console.error("an error has occurred");
}
