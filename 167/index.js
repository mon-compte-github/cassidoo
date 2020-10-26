
// convert number into it's binary representation and add 0's and 1's to get the number of 1's
const ones = (num) => [...num.toString(2)].reduce((prev, curr) => prev + (+curr), 0);

const sortBits = (arr) => arr.sort((a, b) => ones(a) - ones(b));

console.log(sortBits([0,1,2,3,4,5,6,7,8]));
// [0,1,2,4,8,3,5,6,7]
