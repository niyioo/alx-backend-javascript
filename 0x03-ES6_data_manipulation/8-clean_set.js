function cleanSet(set, startString) {
    // Use the filter method to get values starting with startString
    const filteredValues = Array.from(set).filter(value => value.startsWith(startString));

    // Use map to append the rest of the string and join with "-"
    const resultString = filteredValues.map(value => value.slice(startString.length)).join('-');

    return resultString;
}

export default cleanSet;