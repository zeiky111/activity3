// Starter data
const cart = [
  { name: "Pen", price: 20, quantity: 3 },
  { name: "Notebook", price: 50, quantity: 2 },
  { name: "Pencil", price: 10, quantity: 5 }
];

// Start coding here...
//Calculate total price for each item (price * quantity)
const itemTotals = cart.map(({ name, price, quantity }) => {
  const total = price * quantity;
  return `${name}: ₱${price} × ${quantity} = ₱${total}`;
});
document.getElementById("item-totals").innerHTML = itemTotals.join("<br>");

//Generate item descriptions like "Pen - ₱20"
const itemDescriptions = cart.map(({ name, price }) => `${name} - ₱${price}`);
document.getElementById("item-descriptions").innerHTML = itemDescriptions.join("<br>");

//Compute total cart value using reduce()
const cartTotal = cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
document.getElementById("cart-total").innerText = `₱${cartTotal}`;