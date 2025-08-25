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