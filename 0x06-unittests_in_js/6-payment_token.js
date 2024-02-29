function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      // If success is false, do nothing (return a promise that never resolves)
      // This simulates the scenario where the API call fails
      // You could also reject the promise if needed
    }
  });
}

module.exports = getPaymentTokenFromAPI;
