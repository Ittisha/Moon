/**
 * Created by home on 17.03.2016.
 */
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        printPerson(contacts[i]);
    }
}

function search(lastName){
    for (var i=0; i<contacts.length; i++) {
        if (lastName = contacts[i].lastName) {
            printPerson(contacts[i]);
        }
    }
}

function add(firstName, lastName, phoneNumber, email) {
    contacts[contacts.length] = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
    };
};
add("Ann","Zez","(29) 673 17 89","ann@mail.ru");
add("Alex","Metik","(29) 720 01 21","alex@mail.ru");
list();
