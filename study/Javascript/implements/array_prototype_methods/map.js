//* Map
const map = function (arr, callback) {
  const result = [];
  for (let index = 0; index < arr.length; index++) {
    result.push(callback(arr[index], index));
  }
  return result;
};

const arr = [1, 2, 3, 4, 5];

console.log(
  map(arr, (item, index) => {
    return `${index}: ${item * 2}`;
  })
); // [ '0: 2', '1: 4', '2: 6', '3: 8', '4: 10' ]
