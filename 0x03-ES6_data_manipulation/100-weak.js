// Create a WeakMap instance
export const weakMap = new WeakMap();

// Export the queryAPI function
export function queryAPI(endpoint) {
  // Initialize the count if not present in the WeakMap
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // Increment the count for the given endpoint
  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  // Check if the count is >= 5, throw an error if true
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  // Return the current count
  return count;
}
