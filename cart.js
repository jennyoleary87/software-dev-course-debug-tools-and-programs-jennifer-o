const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) { // Bug: <= should be <
    total += cartItems[i].price; // Bug: cartItems[i] is undefined on the last iteration ; SET BREAKPOINT
  }
  return total;
}

/*
Uncaught TypeError: cartItems[i] is undefined
    calculateTotal http://127.0.0.1:5500/cart.js:10
    <anonymous> http://127.0.0.1:5500/cart.js:33

When the browser tool console is opened, this ^^ immediately pops up.
removing the = sign made the loop end before that previous final iteration
debug tools showed me how the loop was being performed
*/

function applyDiscount(total, discountRate) {
  if (isNaN(discountRate)) {
    throw new Error("discount rate is not valid")
  }
  return total - total * discountRate;
  // return total - (total * discountRate); // Bug: Missing validation for discountRate ; SET BREAKPOINT
  // added validation for what to do when the rate is not a number
}

function generateReceipt(cartItems, total) {
  if (isNaN(total)) {
    throw new Error("not a number")
  }
  let receipt = "Items:\n";
  cartItems.forEach((item) => {
    receipt += `\n${item.name}: $${item.price.toFixed(2)}\n`;
  });
  receipt += `Total: $${total.toFixed(2)}`; // Bug: total may not be a number ; SET BREAKPOINT
  // added validation again for what to do if total is not a number
  return receipt;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);
document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;

// Test the corrected program with the given cart and a few edge cases:
// i. An empty cart.
// ii. A cart with one item.
// iii. A discountRate of 0 or 1.

// empty cart
try {
  const emptyCart = [];
  const emptyTotal = calculateTotal(emptyCart);
  const emptyDiscount = applyDiscount(emptyTotal, 0.3);
  const emptyReceipt = generateReceipt(emptyCart, emptyDiscount);
  document.getElementById("emptyTotalText").textContent = `EMPTY Cart Total: ${emptyDiscount}`;
  document.getElementById("emptyReceipt").textContent = emptyReceipt;
  console.log(`EMPTY total: ${emptyTotal}, discounted total: ${emptyDiscount}, receipt: ${emptyReceipt}`);
} catch (error) {
  console.error("empty error: ", error.message);
}

// single item cart
try {
  const singleItemCart = [{ name: "Controller", price: 45 }];
  const singleTotal = calculateTotal(singleItemCart);
  const singleDiscount = applyDiscount(singleTotal, 0.65);
  const singleReceipt = generateReceipt(singleItemCart, singleDiscount);
  document.getElementById("singleTotalText").textContent = `SINGLE Cart Total: ${singleDiscount}`;
  document.getElementById("singleReceipt").textContent = singleReceipt;
  console.log(`SINGLE total: ${singleTotal}, discounted total: ${singleDiscount}, receipt: ${singleReceipt}`);
} catch (error) {
  console.error("single error: ", error.message);
}

// zero discount
try {
  const noDiscountTotal = calculateTotal(cart);
  const noDiscount = applyDiscount(noDiscountTotal, 0.0);
  const noDiscountReceipt = generateReceipt(cart, noDiscount);
  document.getElementById("noDiscountText").textContent = `NO DISCOUNT Cart Total: ${noDiscount}`;
  document.getElementById("noDiscountReceipt").textContent = noDiscountReceipt;
  console.log(`NO DISCOUNT total: ${noDiscountTotal}, discounted total: ${noDiscount}, receipt: ${noDiscountReceipt}`);
} catch (error) {
  console.error("noDiscount error: ", error.message);
}
