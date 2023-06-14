const bikes = [
    {
        name: 'Pinarello',
        weight: 10,
    },
    {
        name: 'Bianchi',
        weight: 8,
    },
    {
        name: 'Scott',
        weight: 11,
    },
];

console.log('--------------------------------------');

let lighterBike = bikes[0];

bikes.forEach(bike => {
    lighterBike = bike.weight < lighterBike.weight ? bike : lighterBike;
})

console.log(lighterBike);