const sumItems = function(array) {
  // Sum all the numbers in the array
  let sumOfNumber = 0;
  for (let item of array) {
    if (Array.isArray(item)) {
      sumOfNumber += sumItems(item);
    } else {
      sumOfNumber += item;
    }
  }
  return sumOfNumber;
};
module.exports = sumItems;
