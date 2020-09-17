var person = {
    firstName: "Tom",
    lastName: "Hanks"
}

var invokePerson = function(obj: {firstName:string, lastName:String}) {
    console.log("First name: " + obj.firstName)
    console.log("Last name: " + obj.lastName)
}

invokePerson(person)