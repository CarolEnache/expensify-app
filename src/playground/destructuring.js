// // Object Destructuring

// // const person = {
// //     // name: 'Carol',
// //     age: 34,
// //     location: {
// //         city: 'London',
// //         temp: 35
// //     }
// // };

// // // const name = person.name;
// // // const age = person.age;

// // const {name: firstName = 'Anonymous', age} = person;

// // console.log(`${firstName} is ${age}`)

// // const {temp:temperature, city} = person.location;

// // if (temperature && city ) {
// //     console.log(`it's ${temperature} in ${city}`);
// // }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name: publisherName = 'Self-published'} = book.publisher;

// console.log(publisherName);

// 
// Array Destructuring
// 

const address = [ '1299 S Juniper Street', 'Philadelphia', 'Pensylvania', '19147'];
const [street, city, state = 'London', zip] = address;
console.log(`You are in ${city} ${state}`)

const item = ['Coffee', '£2.00', '£2.50', '£2.75'];

const [coffee, small, medium, large] = item;

console.log(`A medium ${coffee} costs ${medium}`)