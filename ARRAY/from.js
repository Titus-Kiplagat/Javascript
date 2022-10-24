let a = ['a', 'b', 'c', 'd'];
let b = [];
for (let pointer = 0; pointer < a.length; pointer++) {
	b[pointer] = a[pointer];
}
// alternative es6
let c = Array.from(a);
console.log(c)