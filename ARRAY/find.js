//find() => returns firar element in the provided array that satisfies the provided testing function
const inventory = [
	{ name: "apples", quantity: 2 },
	{ name: "cherries", quantity: 0},
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];
const element = inventory.find(elem => elem.name === "cherries");
console.log(element);//{ name: 'cherries', quantity: 0 }

//findIndex() => return the index of the found element in the array
const elementIndex = inventory.findIndex(elem => elem.name === "cherries");
console.log(elementIndex);//1

//findLast and findLastINdex got an error they are not a function.


