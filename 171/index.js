
const binarySearch = (square, range) => {
    const middle = ((range[0] + range[1]) >> 1);
    const mul = middle * middle;
    if(mul == square) {
        return middle;
    }
    if(range[0] == range[1]) {
        return NaN;
    }
    if(mul > square) {
        return binarySearch(square, [range[0], middle - 1]);
    } else /*if(mul < square)*/ {
        return binarySearch(square, [middle + 1, range[1]]);
    }
};

const perfectSquare = (i) => {
    // first perfect square for integer numbers is 4
    if(i < 4) return false;
    // and with i being >= 4, sqrt(i) <= (i/2) 
    // so reduce the range of possible values :-)
    const val = binarySearch(i, [0, i>>1]);
    //console.log('perfectSquare(' + i + ') = ' + val);
    return !isNaN( val ); 
}

console.log(perfectSquare(25));   // true
console.log(perfectSquare(10));   // false
console.log(perfectSquare(2));    // false
console.log(perfectSquare(4));    // true
console.log(perfectSquare(347));  // false
console.log(perfectSquare(2500)); // true
