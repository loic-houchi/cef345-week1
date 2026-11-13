const products = [
  { name: "Rice (50 kg bag)", qty: 4, buy: 22000, sell: 24500 },
  { name: "Sugar", qty: 0, buy: 900, sell: 1100 },
  { name: "Cooking oil (5 L)", qty: 12, buy: 5500, sell: 6200 },
  { name: "Tomato paste", qty: 30, buy: 250, sell: 350 },
];

const LOW = 5;
const low = products.filter(p => p.qty <= LOW);
console.log("Low stock:", low.map(p => p.name).join(", "));

let value = 0;
for (const p of products) value += p.qty * p.buy;
console.log("Stock value (buying price):", value, "XAF");

const profitPerUnit = p => p.sell - p.buy;
const best = products.reduce((a, b) => (profitPerUnit(b) > profitPerUnit(a) ? b : a));
console.log("Highest profit per unit:", best.name, "(" + profitPerUnit(best) + " XAF)");