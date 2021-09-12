class Person  {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName  = lastName;
        this.salary = salary;
    }
}

console.log(Person)
const heroPerson = new Person('Rahim', 'Uddin', 2000)
const friendlyPerson = new Person('Kalam', 'Uddin', 29000)
console.log(friendlyPerson)
console.log(heroPerson)