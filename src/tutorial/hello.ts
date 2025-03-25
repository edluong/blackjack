class Employee {
    fullName: string;
    constructor(
        public firstName: string,
        public middleName: string,
        public lastName: string
    ){
        this.fullName = `${firstName} ${middleName} ${lastName}`;
    };
};

function greeter(person: Employee) {
    return `Hello, ${person.firstName} ${person.middleName} ${person.lastName}`;
};

let employee = new Employee("Ed","","L");

document.body.textContent = greeter(employee);