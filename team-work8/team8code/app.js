const array1 = [10, 5, 2, 7, 8, 7];
const k1 = 3;

const array = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;

const SlidingWindowMaximum = (array, k) => {
  let arr = [];
  for (let i = 0; i <= array.length - k; i++) {
    //   console.log(array.slice(i, i + k));
    arr.push(Math.max(...array.slice(i, i + k)));
  }
  console.log(arr);
};

SlidingWindowMaximum(array, k);
SlidingWindowMaximum(array1, k1);