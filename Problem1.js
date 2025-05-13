const Peoples = [
    { name: "John", age: 30, gender: "male" },
    { name: "Jane", age: 25, gender: "female" },
    { name: "Alex", age: 27, gender: "male" },
    { name: "Mary", age: 22, gender: "male" },
    { name: "David", age: 35, gender: "male" }
];

function filterAndMapPeople(peoples) {
    const filteredPeople = Peoples.filter(person => person.gender !== 'female');
    const names = filteredPeople.map(person => person.name);
    return names;
}

const result = filterAndMapPeople(Peoples);
console.log(result); 