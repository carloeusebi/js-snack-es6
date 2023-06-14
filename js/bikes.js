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

/**
 * Given an array of objects and a property it returns the object with the lowest value in that property
 * @param {[object]} array the array of objects to search into
 * @param {string} property the property to evaluate
 * @returns {object} the object with the lowest value property
 */
const getLowestValueItem = (array, property) => {
    return array.reduce((lowest, arr) => arr[property] < lowest[property] ? arr : lowest);
}

const lightestBike = getLowestValueItem(bikes, 'weight');

console.log('Lightest Bike:');
console.log(lightestBike);

// print on page

const { name: bikeName, weight } = lightestBike;

document.body.innerHTML += `The lightest bike is ${bikeName} and it weights ${weight}kg.`;