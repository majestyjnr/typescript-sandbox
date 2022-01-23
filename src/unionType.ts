// UNION TYPE
// DESCRIPTION      :       The allows a value to accept two or more data types

function combine(value1: number | string, value2: number | string, value3: number | string){
    let output;
    if(typeof value1 === 'number' && typeof value2 === 'number' && typeof value3 === 'number'){
        output = value1 + value2 + value3
    } else {
        output = value1.toString() + ' ' + value2.toString() + ' ' + value3.toString()
    }
    return output
}

// Calling the function with arguments
console.log(combine(10, 15, 20))
console.log(combine('I', 'am', 'Majesty'))
