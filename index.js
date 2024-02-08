//Numeric arrays
const arr = [1, 2, 3, 4, 5];
const arr1 = [6, 7, 8];

const maximum = (arr) => {
  return Math.max(...arr);
};

const minimum = (arr) => {
  return Math.min(...arr);
};

const sum = (arr) => {
  let sums = 0;
  for (let i = 0; i < arr.length; i++) {
    sums += arr[i];
  }
  return sums;
};

const average = (arr) => {
  let length = arr.length;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let average = sum / length;
  return average;
};

const ascending = (arr) => {
  let asc = arr.sort((a, b) => {
    return a - b;
  });
  return asc;
};

const descending = (arr) => {
  let desc = arr.sort((a, b) => {
    return b - a;
  });
  return desc;
};

const reverse = (arr) => {
  return arr.reverse();
};

const valueInArr = (arr, n) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return true;
    }
  }
  return false;
};

const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};

const findIndexOf = (arr, n) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) return i;
  }
  return false;
};

const slice = (arr, n) => {
  const sliced = [];

  if (n > 0) {
    for (let i = 0; i < n; i++) {
      sliced.push(arr[i]);
    }
  } else {
    let sliceIndex = -1 * n;
    console.log(sliceIndex);
    const index = arr.length - 1 - sliceIndex;
    for (let i = arr.length - 1; i > index; i--) {
      sliced.unshift(arr[i]);
    }
  }
  return sliced;
};

const concat = (arrA, arrB) => {
  return [...arrA, ...arrB];
};
