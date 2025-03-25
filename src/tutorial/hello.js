var Employee = /** @class */ (function () {
    function Employee(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = "".concat(firstName, " ").concat(middleName, " ").concat(lastName);
    }
    ;
    return Employee;
}());
;
function greeter(person) {
    return "Hello, ".concat(person.firstName, " ").concat(person.middleName, " ").concat(person.lastName);
}
;
var employee = new Employee("Ed", "", "L");
document.body.textContent = greeter(employee);
