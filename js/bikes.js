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

lighterBike = bikes.reduce((lighter, bike) => bike.weight < lighter.weight ? bike : lighter, bikes[0]);

console.log(lighterBike);