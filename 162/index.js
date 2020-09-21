
const sample1 = [5, 8, -5];
const sample2 = [10, -10];
const sample3 = [5, 8, -5, -3, 5, -10];

const asteroids = (array) => {
  let currentCount = array.length;
  // asteroids count on previous turn
  // plus one to enter while loop
  let previousCount = currentCount + 1;
  // stop when no more asteroids ... or nothing happened on this turn
  while(currentCount > 0 && (currentCount != previousCount)) {
    // 4 possibilities (+,+), (+,-), (-,+), (-,-)
    // assume array never contains zeros
    for(let k=0; k<array.length; k++) {
      if(array[k] > 0) {
        if(array[k+1] > 0) {
          // « Asteroids moving in the same direction will never meet. »
        } else if(array[k+1] < 0) {
          // collision detected
          if(Math.abs(array[k]) === Math.abs(array[k+1])) {
            // « When they are the same size, they both explode. »
            array.splice(k, 1);
            array.splice(k, 1);
          } else {
            // « If two asteroids meet, the smaller one will explode. »
            const pos = k + (Math.abs(array[k]) > Math.abs(array[k+1]) ? 1 : 0);
            array.splice(pos, 1);
          }
        } else {
          // zero or undefined (out of bounds)
        }
      } else if(array[k] < 0) {
        if(array[k+1] < 0) {
          // « Asteroids moving in the same direction will never meet. »
        } else if(array[k+1] > 0) {
          // « Asteroids moving in the -same- opposite direction will never meet either. »
        } else {
          // zero or undefined (out of bounds)
        }
      } else {
        throw 'can\'t handle zeros ¯\_(ツ)_/¯';
      }
    }
    
    previousCount = currentCount;
    currentCount = array.length;
    
  }
  
  console.log(array)
}

asteroids(sample1);
asteroids(sample2);
asteroids(sample3);
