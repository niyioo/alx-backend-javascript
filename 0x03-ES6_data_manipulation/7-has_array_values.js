function hasValuesFromArray(set, arr) {
  // Use the every method to check if all elements in the array exist in the set
  return arr.every((element) => set.has(element));
}

export default hasValuesFromArray;
