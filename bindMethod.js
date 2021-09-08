const person = {
    firstName: 'John',
    lastName: 'Smith',
    salary: 15000,
    getFullName: function(){
        const fullName = `${this.firstName} ${this.lastName}`;
        console.log({fullName})
    },
    chargeBill: function (amount) {
        console.log(this)
        this.salary= this.salary - amount;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Alam',
    salary: 20000,
    getFullName: function () {
        console.log(this.firstName + ' ' + this.lastName)
    }
}

const heroChargeBill = person.chargeBill.bind(heroPerson);
heroChargeBill(1500);
heroChargeBill(3000);
console.log('Hero person salary:', heroPerson.salary)