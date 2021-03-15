
// https://brilliant.org/wiki/pascals-triangle/

const pascals = (num) => {
    let current = [1];
    // row[n] is computed with row[n-1]
    for(let row=1; row<=num; row++) {
        const temp = [1];
        for(let c=0; c<row-1; c++) {
            temp.push( current[c] + current[c+1] );
        }
        temp.push(1);
        current = temp;
    }
    return current;
}

console.log(pascals(0));    // [ 1 ]
console.log(pascals(3));    // [ 1, 3, 3, 1 ]
console.log(pascals(5));    // [ 1, 5, 10, 10, 5, 1 ]
