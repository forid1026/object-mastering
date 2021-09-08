const person = {
    firstName: 'John',
    lastName: 'Smith',
    salary: 15000,
    getFullName: function(){
        const fullName = `${this.firstName} ${this.lastName}`;
        console.log({fullName})
    },
    chargeBill: function (amount) {
        this.salary= this.salary - amount;
        return this.salary;
    }
}
console.log(person.getFullName())
console.log(person.chargeBill(150));
console.log(person.chargeBill(2500))