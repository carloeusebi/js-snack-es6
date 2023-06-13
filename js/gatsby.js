const table = 'Tavolo Vip';
const guests = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

const guestObjects = guests.map((guest, index) => {
    place = index + 1;
    return {
        name: guest,
        table: table,
        place: place
    };
});

console.log(guestObjects);