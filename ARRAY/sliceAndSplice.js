//slice(start, end)
const myCar = ["myHonda", 2, 'cherry condition', 'purchased 1997'];
const newCar = myCar.slice(0, 2);
console.log(newCar);// ["myHonda", 2]


//splice(start, deleteCount, newElements)
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi")
console.log(fruits);
