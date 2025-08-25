//* Reduce
const reduce = function (arr, callback, initialValue) {
  let result = initialValue;
  for (let index = 0; index < arr.length; index++) {
    result = callback(result, arr[index], index);
  }
  return result;
};

['a', 'b', 'c'].reduce((acc, cur, index) => {
  acc[cur] = index;
  return acc;
}, {});

console.log(
  reduce(
    ['a', 'b', 'c'],
    (acc, cur, index) => {
      acc[cur] = index;
      return acc;
    },
    {}
  )
); // { a: 0, b: 1, c: 2 }
