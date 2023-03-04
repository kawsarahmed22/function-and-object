const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

const accessAge = person.age
console.log(accessAge);
const accessAge2 = person['age']
console.log(accessAge2);
const properties = Object.keys(person);
console.log(properties); 
//[ 'firstName', 'lastName', 'age', 'eyeColor' ]