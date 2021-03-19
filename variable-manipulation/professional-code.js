// How a profesional would write this code

// =====================================================

const TAX_RATE = 1.1;
const SHIPPING_DEFAULT = 5;

// destructuring inside function arguments | also, using setting defaults so we don't have to worry about if checks
function calculateTotal(items, { shipping = SHIPPING_DEFAULT, discount = 0 } = {}) {
  if (items == null || items.length === 0) return 0;

//   using reduce function instead of looping with a forEach | lso, using constant variable and not constantly updating variables and having helper intermediate calculations/variables  
  const itemCost = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  const discountRate = 1 - discount;

  return itemCost * discountRate * TAX_RATE + shipping;
}

const testItems = [
  { price: 15, quantity: 2 },
  { price: 20, quantity: 1 },
  { price: 5, quantity: 4 }
]

// console.log(calculateTotal());
// console.log(calculateTotal(testItems));
// console.log(calculateTotal(undefined, {}));
// console.log(calculateTotal([], {}));
console.log(calculateTotal(testItems, {}));
console.log(calculateTotal(testItems, { shipping: 0 }));
console.log(calculateTotal(testItems, { discount: .75 }));
console.log(calculateTotal(testItems, { shipping: 12 }));