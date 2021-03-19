// How a profesional would write this code

// =====================================================

function calculateTotal(items, options) {
    // common beginner mistake is not setting dfault value for options
    let t = 0;
    items.forEach(i => {
      t += i.price * i.quan;
    });
    t = t - t * (options.dis || 0);
    t = t * 1.1;
    // common beginner mistage with using ||,
    // if something evaluates to 0, 0 || something will always be something
    t = t + (options.ship || 5);
    return t;
}
  
const testItems = [
    { price: 15, quan: 2 },
    { price: 20, quan: 1 },
    { price: 5, quan: 4 }
]


  
  // console.log(calculateTotal())
  // console.log(calculateTotal(testItems))
  // console.log(calculateTotal(undefined, {}))
  console.log(calculateTotal([], {}));
  console.log(calculateTotal(testItems, {}));
  console.log(calculateTotal(testItems, { ship: 0 }));
  console.log(calculateTotal(testItems, { dis: .75 }));
  console.log(calculateTotal(testItems, { ship: 12 }));