//Objects used for storing keyed collections.
//Arrays used for storing ordered collections.


//Map() => collection of keyed data items, just like object but main difference is that it allows keys of any type.

//new Map() => create new map.
let map = new Map();

//map.set(key, value) => stores value by key.
map.set('1', 'stringOne');
console.log(map);// {'1' => 'stringOne}

//map.get()
console.log(map.get('1')) // StringOne

//map.has(key)
console.log(map.has('1'))//true
//map.clear()
console.log(map.clear())//undefined
//map.size
console.log(map.size);//1

//new Set(iterable)
let set = new Set([{ name: 'john' }, { name: 'peter' }, { name: 'mary' }]);
//set.add(value)
set.add(1).add('some text');
//set.has(value)
console.log(set.has(1))
//set.clear
// set.clear();
//set.size
console.log(set.size)
//set.entries()
const setIterator = set.entries();
console.log(setIterator.next().value);
