
// operations implementation
const add = (a, b) => a+b;
const substract = (a, b) => a-b;
const multiply = (a, b) => a*b;
const divide = (a, b) => a/b;

// add extra operations here ...
// only two-operands are supported
const mod = (a, b) => a%b;

// valid operations (name => impl)
const operations = {
    add, substract, multiply, divide, mod
};

const babyLisp = (str) => {
    let result = str;
    // a parenthesis means expression to evaluate
    // iterate, evaluating inner expressions first
    // (i.e. those with only literals operands)
    while(result.indexOf('(') != -1) {
        // *? means ungreedy, to match inner parenthesis first
        result = result.replace(/\(([^()]*?)\)/, (match, capture) => {
            const tokens = capture.split(/\s/);
            // doesn't handle invalid operations (easy to implement though ^^)
            // assume given values are weel-formated numbers only
            // could handle unary operator easily with « if(tokens.length == 2) { ... } »
            return operations[ tokens[0] ](+tokens[1], +tokens[2]);
        });
    }
    return result;
}

console.log(babyLisp('(add 1 2)')); // 3
console.log(babyLisp('(multiply 4 (add 2 3))')); // 20
console.log(babyLisp('(multiply (add 1 1) (substract 20 (add (divide 30 5) 4)))')); // 20
console.log(babyLisp('(mod (multiply 3 4) 7)')); // 5
