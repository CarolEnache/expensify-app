// const person = {
//     // name: 'Carol',
//     age: 34,
//     location: {
//         city: 'London',
//         temp: 35
//     }
// };

// // const name = person.name;
// // const age = person.age;

// const {name: firstName = 'Anonymous', age} = person;

// console.log(`${firstName} is ${age}`)

// const {temp:temperature, city} = person.location;

// if (temperature && city ) {
//     console.log(`it's ${temperature} in ${city}`);
// }

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {name:publisherName = 'Self-published'} = book.publisher;

console.log(publisherName);