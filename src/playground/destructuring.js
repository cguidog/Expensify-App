//////////////Object desctructuring//////////////
//////////////Object desctructuring//////////////

// const person = {
//     name: 'Carlos',
//     age: 32,
//     location: {
//         city: 'Germantown',
//         temp: 65
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It\'s ${temperature} in ${city}.`)
// }

//////////////Array desctructuring//////////////
//////////////Array desctructuring//////////////

const address = ['19605 Gunners Branch Rd', 'Germantown', 'Maryland', '20876']

const [street, city, state = 'New York', zip] = address;

console.log(`You are in ${city} ${state}`)