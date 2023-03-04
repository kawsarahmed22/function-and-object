const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  const keys = Object.keys(person);
  const values = Object.values(person);


  for(var i = 0; i < keys.length; i++){
      const propertyName = keys[i]
      const propertyvalues = person[propertyName]
    //   console.log(propertyName, propertyvalues);
  }

//   for in

for(var propertyName in person){
    console.log(propertyName);
}