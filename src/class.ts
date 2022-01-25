// CLASS
// Classes are used to define objects

// Implementing interfaces with classes.
interface EmployeeInterface {
    id: number
    name: string;
    register() : string
}

// CREATING A FUNCTION
class Employee implements EmployeeInterface{
    id: number          // protected, private & public can be applied to properties of a class. 
    name: string
    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }
    register(){
        return `${this.name} has been registered successfully.`
    }
}
const staff1 = new Employee(1, 'Solomon Aidoo Junior')
const staff4 = new Employee(2, 'Developer Majesty')

