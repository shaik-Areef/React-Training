var customer = {
    firstName: "Ravi",
    lastName: "Kumar",
    sayHi: function () { return "Hi " + customer.firstName + customer.lastName; }
};
console.log("Customer Object ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
var employee = {
    firstName: "Ramesh",
    lastName: "Kumar",
    sayHi: function () { return "Hello " + employee.firstName + employee.lastName; }
};
console.log("Employee  Object ");
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.sayHi());
