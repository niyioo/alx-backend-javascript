function cleanSet(set, startString) {
  // Use filter to get values starting with startString
  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));

  // Use a Set to store unique values
  const resultSet = new Set(filteredValues);

  // Convert the Set to an array, then join with "-"
  const resultString = Array.from(resultSet).join('-');

  return resultString;
}

export default cleanSet;
