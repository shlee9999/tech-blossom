//* Map 함수 구현
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
    return item * 2 + ' ' + index;
  })
);
