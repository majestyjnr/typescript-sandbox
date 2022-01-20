// LITERAL TYPE
// DESCRIPTION      :       It allows a user to set a string literal as a type
// Defining a function
function combine1(value1, value2, literal) {
    var output;
    if (typeof value1 === 'number' && typeof value2 === 'number') {
        output = value1 + value2;
    }
    else {
        output = value1.toString() + ' ' + value2.toString();
    }
    return output;
}
console.log(combine1(10, 15, 'as-number'));
console.log(combine1('I', 'am', 'as-text'));
