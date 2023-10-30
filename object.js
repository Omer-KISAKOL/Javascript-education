const person = {
    firstName : "Ömer",
    lastName : "KISAKOL",
    id : 4121,
    age : 23,
    eyeColor : "green",

    fullName: function() {return this.firstName + " " + this.lastName}
};


console.log(person.id + "-" + person.fullName() +  ": " + person.firstName + " is " + person.age + " years old.");