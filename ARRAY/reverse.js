//reverse()
//split() => convert the string into and array.
const { array } = require("joi");
const sentence = "I am learning javaascript array methods!";
const arrayList = sentence.split(' '); //[ 'I', 'am', 'learning', 'javaascript', 'array', 'methods!' ]
const reversedArrayList = arrayList.reverse();
console.log(reversedArrayList)//[ 'methods!', 'array', 'javaascript', 'learning', 'am', 'I' ]