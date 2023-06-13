const students = [
    {
        id: 213,
        name: 'Marco della Rovere',
        grades: 78
    },
    {
        id: 110,
        name: 'Paolo Cortallessa',
        grades: 96
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grades: 48
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        grades: 74
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68
    },
    {
        id: 102,
        name: 'Piero Della Francesca',
        grades: 50
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84
    }
];

// separator
console.log('--------------------------------------');

// students with grades > 70

const highGradeStudents = students.filter(student => student.grades > 70);

console.log('Students with grades > 70');
console.log(highGradeStudents);

// students with grades > 70 AND id > 120

const highGradeHighIdStdents = highGradeStudents.filter(student => student.id > 120);

console.log('Students with grades > 70 AND id > 120');
console.log(highGradeHighIdStdents);

// plates with UPPERCASE names

const plates = students.map(student => student.name.toUpperCase());

console.log('PLATES');
console.log(plates);


// why not? print them on html :)

let platesList = '';

plates.forEach(plate => {
    platesList += `<li>${plate}</li>`;
});

document.body.innerHTML += `<ul>${platesList}</ul>`;
