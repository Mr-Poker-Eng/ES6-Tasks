const products = [
  { name: "Laptop", price: 800 },
  { name: "Mobile", price: 500 },
  { name: "Tablet", price: 200 },
  { name: "Headphone", price: 800 },
  { name: "Laptop", price: 800 },
];

let updatePrice = products.map((newPrice) => {
  newPrice = newPrice.price * 2;
  return newPrice;
});
console.log(updatePrice);
document.write(updatePrice);

let filterProduct = updatePrice.filter((p) => {
  if (p < 1000) {
    return p;
  }
});
console.log(filterProduct);

let totalPrice = updatePrice.reduce((acc, price) => acc + price, 0);

console.log(totalPrice);

