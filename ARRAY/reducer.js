const array = [90, 20, 20, 40, 0];
let total = array.reduce((accumulator, value) => accumulator + value, 0);
console.log(total);

const minMax = array.reduce((acc, score) => [Math.min(acc[0], score), Math.max(acc[1], score)], [100, 0]);
console.log(minMax);


const students = [
	{ userId: 'abc', name: 'Steven', passFail: true },
	{ userId: 'dfe', name: 'Debbie', passFail: true },
	{ userId: 'abe', name: 'Max', passFail: false },
];

let studentObj = students.reduce((acc, person) => {
	return { ...acc, [person.userId]: person }
}, {});
console.log(studentObj);
console.log(studentObj.abc)