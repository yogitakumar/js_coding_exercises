const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  return nums.indexOf(n) > -1 && nums.indexOf(n) < nums.length - 1 ? nums[nums.indexOf(n) + 1] : null;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");


  let oneCnt = 0;
  let zeroCnt = 0;

  const res = {
    "1": oneCnt,
    "0": zeroCnt

  };

  [...str].forEach(item => item === "1" ? res[1]++ : res[0]++);


  return res;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");

  return (
    parseFloat(
      n
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * Math.sign(n)
  )
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");

  return arrs.reduce((sum, num) => sum + (Array.isArray(num) ? num.reduce((a, b) => a + b) : num), 0);

};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length >= 2) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  }
  return arr;

};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  return ((Object.values(haystack).map((val) => val.toString().toLowerCase()))
    .filter(obj => obj.indexOf(searchTerm.toLowerCase()) > -1)).length > 0;

};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  let obj = {};
  let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  str = str.replace(regex, '');
  str.split(" ").forEach(function (el) {
    el = el.toLowerCase();
    obj[el] = obj[el] ? ++obj[el] : 1;
  });
  return obj;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
