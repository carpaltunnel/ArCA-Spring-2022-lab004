// Create array with 100 items
const create100ItemArray = () => {
  const items = [];
  for (let x = 1; x <= 100; x++) {
    items.push(x);
  }

  return items;
}

const items = create100ItemArray();
console.warn(`Created array wih ${items.length} items.`);

// Sort items descending
items.sort((a, b) => a < b ? -1 : 1);

console.log(`After sorting items in descending order, the first item is ${items[0]}`);
