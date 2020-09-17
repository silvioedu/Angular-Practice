var person = {
    firstName: "Tom",
    lastName: "Hanks"
};
var invokePerson = function (obj) {
    console.log("First name: " + obj.firstName);
    console.log("Last name: " + obj.lastName);
};
invokePerson(person);
