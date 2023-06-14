console.log('--------------------------------------');

const teams = [
    {
        name: 'Milan',
        points: 0,
        fouls: 0
    },
    {
        name: 'Inter',
        points: 0,
        fouls: 0
    },
    {
        name: 'Juventus',
        points: 0,
        fouls: 0
    },
    {
        name: 'Roma',
        points: 0,
        fouls: 0
    },
    {
        name: 'Lazio',
        points: 0,
        fouls: 0
    },
    {
        name: 'Fiorentina',
        points: 0,
        fouls: 0
    },
    {
        name: 'Empoli',
        points: 0,
        fouls: 0
    },
    {
        name: 'Atalanta',
        points: 0,
        fouls: 0
    },
    {
        name: 'Napoli',
        points: 0,
        fouls: 0
    }
];

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

teams.forEach(team => {
    team.points = getRandomNumber(0, 90);
    team.fouls = getRandomNumber(50, 500);
});

console.log(teams);

const teamsAndFouls = teams.map(({ name, fouls }) => ({ name, fouls }));

console.log(teamsAndFouls);

let teamsTable = teamsAndFouls.reduce((acc, { name, fouls }) => {
    return acc += `
        <tr>
            <td>${name}</td>
            <td>${fouls}</td>
        </tr>
    `;
}, '')

teamsTable = `
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Fouls</th>
            </tr>
        </thead>
        <tbody>
            ${teamsTable}
        </tbody>
    </table>
`

document.body.innerHTML += teamsTable;