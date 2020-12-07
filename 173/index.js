
const reverseString = (str) => {
    // this impl is fine for ascii strings
    return str.split('').reverse().join('');
};

const stringMultiply = (first, second) => {

    // first reverse strings, will make 
    // the computation much easier :)
    const rsecond = reverseString(second);
    const rfirst = reverseString(first);
    
    //     1 2 3    <- m
    //   x 4 5 6    <- k
    //  ----------
    //    lines[]
    //  ----------
    //    result

    // 123 x 456 = 123 x (4x100 + 5x10 + 6)
    //  = (123 x 4 x 100) + (123 x 5 X 10) + (123 x 6)
    //  = (123 x 4) x 100 + (123 x 5) x 10 + (123 x 6)
    //  =  (123 x 6)
    //   + (123 x 5) x 10
    //   + (123 x 4) x 100

    let lines = [];

    // k iterates over second number
    for(let k=0; k<rsecond.length; k++) {
        
        let carry = 0;
        let line = '';

        // add zeros -> pow(10, k)
        for(let n=0; n<k; n++) {
            line += '0';
        }

        const multiplier = (rsecond.codePointAt(k) - 48);
        
        // m iterates over first number
        for(let m=0; m<rfirst.length; m++) {
            // 48 is ascii value of '0'
            const mul = ((rfirst.codePointAt(m) - 48)* multiplier) + carry;
            const reminder = (mul % 10);
            line +=  ('' + reminder);
            carry = Math.floor(mul / 10);
        }

        if(carry != 0) {
            line += carry;
        }

        lines.push(line);
    }

    // add lines
    let result = '';
    let carry = 0;
    let k = 0;

    // find longest line
    const longest = lines.reduce((prev, curr) => Math.max(prev, curr.length), 0);
    for(let k=0; k<longest; k++) {

        // sum lines
        const add = carry + lines.reduce((prev, curr) => {
            return prev + (k < curr.length ? +curr[k] : 0);
        }, 0);

        result += (add % 10);
        carry = Math.floor(add / 10);
    }

    if(carry != 0) {
        result += carry;
    }

    // remove unneeded zéros
    while(result.length > 1 && result.startsWith('0'))
        result = result.substr(1);
    
    return reverseString(result);

};

console.log(stringMultiply("0", "345"));         // "0"
console.log(stringMultiply("123", "456"));       // "56088"
console.log(stringMultiply("789", "567"));       // "447363"
console.log(stringMultiply("999999", "999999")); // "999998000001"
