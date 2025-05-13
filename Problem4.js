const cars = [
    { make: "Toyota", model: "Corolla", year: 2015 },
    { make: "Honda", model: "Civic", year: 2020 },
    { make: "Ford", model: "Focus", year: 2018 },
    { make: "BMW", model: "3 Series", year: 2016 },
    { make: "Audi", model: "A4", year: 2019 }
];

function sortCarsByYear(cars) {
    return cars.sort((a, b) => a.year - b.year);
}

const sortedCars = sortCarsByYear(cars);
console.log(sortedCars);
