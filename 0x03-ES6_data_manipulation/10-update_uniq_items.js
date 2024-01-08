function updateUniqueItems(groceryMap) {
  // Check if the argument is a map
  if (!(groceryMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate through the entries and update quantity to 100 for items with initial quantity 1
  for (const [item, quantity] of groceryMap) {
    if (quantity === 1) {
      groceryMap.set(item, 100);
    }
  }
}

export default updateUniqueItems;
