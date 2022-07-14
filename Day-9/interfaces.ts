interface IPerson {
    firstName: string,
    lastName: string,
    sayHi: () => string;
}
var customer: IPerson = {
    firstName: "Ravi",
    lastName: "Kumar",
    sayHi: (): string => { return "Hi " + customer.firstName + customer.lastName }
}

console.log("Customer Object ")
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.sayHi())

var employee: IPerson = {
    firstName: "Ramesh",
    lastName: "Kumar",
    sayHi: (): string => { return "Hello " + employee.firstName + employee.lastName }
}

console.log("Employee  Object ")
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.sayHi())