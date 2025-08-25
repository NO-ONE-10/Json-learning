const name = ["fakhri", "humza", "sam"];

const person = {
  "name": "fakhri",
  "age": 22,
  "isEmployed": true,
  "hobbies": ["gaming", "coding", "waching anime"]
}

const people = [{
  "name": "fakhri",
  "age": 22,
  "isEmployed": true
},
{
  "name": "humza",
  "age": 18,
  "isEmployed": false
},
{
  "name": "sam",
  "age": 55,
  "isEmployed": true
},
{
  "name": "jack",
  "age": 34,
  "isEmployed": false
}]

const jsonStringName = JSON.stringify(name);

const jsonStringPerson = JSON.stringify(person);

const jsonStringPeople = JSON.stringify(people);

console.log(jsonStringName);

console.log(jsonStringPerson);

console.log(jsonStringPeople);

console.log("how to parse json strings");

const nameString = `["fakhri", "humza", "sam"]`;

const personString = `{
  "name": "fakhri",
  "age": 22,
  "isEmployed": true,
  "hobbies": ["gaming", "coding", "waching anime"]
}`;

const peopleString = `[{
  "name": "fakhri",
  "age": 22,
  "isEmployed": true
},
{
  "name": "humza",
  "age": 18,
  "isEmployed": false
},
{
  "name": "sam",
  "age": 55,
  "isEmployed": true
},
{
  "name": "jack",
  "age": 34,
  "isEmployed": false
}]`;

const jsonParseName = JSON.parse(nameString);

const jsonParsePerson = JSON.parse(personString);

const jsonParsePeople = JSON.parse(peopleString)

console.log(jsonParseName);

console.log(jsonParsePerson);

console.log(jsonParsePeople);

// how to fatch json file

console.log("how to fatch json file");

fetch('name.json')
  .then(response => response.json())
  .then(value => console.log(value))