
/**
 * Returns true if all values in array
 * make up a fibonacci sequence.
 * @param array The values.
 */
const isFibo = (array: number[]) => {
  if(array.length >= 3) {
    for(let k=0; k<array.length - 2; k++) {
      if(array[k] + array[k+1] !== array[k+2]) {
        return false;
      }
    }
    return true;
  }
  return false;
}
 
//console.log(isFibo([1, 2, 5])); -> false
//console.log(isFibo([1, 2, 3, 5])); -> true

/**
 * Recurse. Build a tree of all possible sequences
 * (in fact n trees, each element being the root 
 * of a tree and folowwing elements being the leaves)
 * and check which ones follow the fibonacci pattern.
 * 
 *  example : [1, 3, 7, 11] will produce 4 trees
 * 
 *          __ 1 ___         3       7    11
 *        /     \   \       / \     /
 *       3       7  11     7  11   11
 *      / \     /         /
 *     7  11   11        11
 *    /
 *  11
 * 
 * @param array The values to process.
 * @param current The values already processed before.
 * @return An array of matching sequences.
 */
const findFibo = (array: number[], current: number[]): number[][] => {
  // end-of-recursion condition
  if(array.length == 0) {
    const temp = [...current, ...array];
    if(isFibo(temp)) {
      console.log(temp);
      return [temp];
    }
    return [];
  }

  const result = [];
  // concat results for all subtrees
  for(let k=0; k<array.length; k++) {
    
    // looks like backtracking ^^
    const temp = [...current, array[k]];
    if(isFibo(temp)) {
      console.log(temp);
      result.push(temp);
    }

    // recurse in subtree and collect matching sequences
    findFibo(array.slice(k+1), temp)
      .forEach(element => result.push(element));
  }
  return result;

}

// ------------------------

const fibonacciLike = (array) => {
  const result = findFibo(array, []);
  return (result.length == 0 ? 0 : Math.max(...result.map(element => element.length)));
}

const values = [1, 3, 7, 11, 12, 14, 18];

console.log( fibonacciLike(values) );

// [1,11,12]  [3,11,14]  [7,11,18]
