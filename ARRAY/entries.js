const fruits = ["Banana", "Orange", "Apple", "Mango"];
 const plantFruits = fruits.entries()

for (let x of plantFruits) {
	console.log(x)
}
//[ 0, 'Banana' ]
//[ 1, 'Orange' ]
//[ 2, 'Apple' ]
//[ 3, 'Mango' ]