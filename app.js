// 1.    Core Types
// number   : This refers to all numbers including integers and floats. eg: 2, 303, 2.03, 0.5
// strings  : These refers  to text can are defined in one of these three ways. Thus 'Majesty', "Majesty", `Majesty`
// Boolean  : These refers to any of these two; True or False (0, 1)
// EXAMPLE
function display(value1, value2, value3, isRead) {
    if (isRead) {
        console.log(value1 * value2 * value3);
    }
    else {
        console.log(value1 + value2 + value3);
    }
}
var num1 = 12;
var num2 = 10;
var num3 = 5;
var isRead = true;
display(num1, num2, num3, isRead);
