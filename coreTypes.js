// 1. DAY ONE   Core Types
// number   : This refers to all numbers including integers and floats. eg: 2, 303, 2.03, 0.5
// strings  : These refers  to text can are defined in one of these three ways. Thus 'Majesty', "Majesty", `Majesty`
// Boolean  : These refers to any of these two; True or False (0, 1)
// Object   :
// Array    : 
// Tuple    : A fixed-length array
// Enum     : Automatically enumerated global constant identifiers / ASSIGNS LABELS TO NUMBERS
// Number, String & Boolean Example
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
// Object, Array, Tuple and Enum Example
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["SUPERADMIN"] = 2] = "SUPERADMIN";
})(Role || (Role = {})); // ASSIGNS LABELS TO NUMBERS
var staff = {
    name: 'Developer Majesty',
    position: 'Software Developer',
    age: 23,
    attributes: ['Dancing', 'Coding', 'Cooking'],
    purpose: [0, 'engineer'],
    role: Role.SUPERADMIN
};
// staff.role = [12, '44']      // Assign a new value to the tuple
for (var attribute in staff.attributes) {
    console.log(attribute);
}
