// LITERAL TYPE
// DESCRIPTION      :       It allows a user to set a string literal as a type

// TYPE ALIAS
// This enables developers to set types using their own 



// Defining a function
function combine1(value1: number | string, value2: number | string, literal: 'as-number' | 'as-text' | 'as-boolean'){
    let output;
    if(typeof value1 === 'number' && typeof value2 === 'number'){
        output = value1 + value2
    } else {
        output = value1.toString() + ' ' + value2.toString()
    }
    return output
}

// Defining a function
function combine2(value1: number | string, value2: number | string, literal: 'as-number' | 'as-text' | 'as-boolean'){
    let output;
    if(typeof value1 === 'number' && typeof value2 === 'number'){
        output = value1 + value2
    } else {
        output = value1.toString() + ' ' + value2.toString()
    }
    return output
}


console.log(combine1(10, 15, 'as-number'))
console.log(combine1('I', 'am', 'as-text'))

console.log(combine2(10, 15, 'as-number'))
console.log(combine2('I', 'am', 'as-text'))
