var person = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHello: function() {} //Template
}

console.log(person.firstName)
console.log(person.lastName)

person.sayHello = function() {
    console.log("Hello " + person.firstName)
}

person.sayHello()