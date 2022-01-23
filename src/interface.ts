// INTERFACE
// 

//NB: IT HAS NO EQUAL TO
interface StaffInterface {
    readonly id: number
    name: string;
    position: string;
    age: number;
    attributes: any[]           // Could be any[], number[], boolean[], string[]
    purpose: [number, string]  // Accepts two objects 
    role: Role.SUPERADMIN,
    email?: string             // The question mark helps to set properties to OPTIONAL
}

const staff3 : StaffInterface ={
    id: 3,
    name: 'Developer Majesty',
    position: 'Software Developer',
    age: 23,
    attributes: ['Dancing', 'Coding', 'Cooking'],
    purpose:[0, 'engineer'],
    role: Role.SUPERADMIN
}


// Using interfacse with functions

interface Maths{
                          // It returns a number
    (x: number, y: number): number
}

const add: Maths = (x: number, y: number) : number => {
    return x + y
}

const subtract: Maths = (x: number, y: number) : number => {
    return x - y
}

const multiply: Maths = (x: number, y: number) : number => {
    return x * y
}


add(2, 3)
subtract(2, 3)
multiply(2, 3)
