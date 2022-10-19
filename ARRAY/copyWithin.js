// array.copyWithin(target, start, end) ==> (required, optional, optional)
//target => index to copy the element
//start => start index. Default 0
//end => end index. Default array length

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);
console.log(fruits);// ["Banana", "Orange", " Banana", "Orange"]

const Fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
Fruits.copyWithin(2, 0, 2);
console.log(Fruits);// ["Banana", "Orange", "Banana", "Orange", "Kiwi"]