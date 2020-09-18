
const numChars = (str, letter) => {
    return [...str].reduce((acc, curr) => acc+ +(curr === letter), 0);  
}

console.log( numChars('oh heavens', 'h') ); // 2
console.log( numChars('The quick brown fox jumps over the lazy dog', 'o') ); // 4
