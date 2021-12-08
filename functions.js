//.........................CHALLENGE ONE.......................//

//Write a function which greets the user. The function should receive one argument, a string. We can assume the string is a person's name. We'd like the function to return "Hello " and then the name. We should be able to see the outputs in the console.

//Attempt 1

function greeter(str) {
    return "Hello " + str;
  }
  
  console.log(greeter("Yvonne"));
  // outputs to the console: Hello Yvonne
  
  let myGreeting = greeter("gregor");
  console.log(myGreeting);
  // outputs: Hello gregor
  
  //Attempt 2
  
  const greeting = str => `Hello ${str}`;
  
  console.log(greeting("Yvonne"));
  // outputs to the console: Hello Yvonne
  
  let thisGreeting = greeting("gregor");
  console.log(thisGreeting);
  // outputs: Hello gregor
  
  //Attempt 3
  
  const welcomeMessage = () => `Hello ${thatGreeting}`;
  
  console.log(welcomeMessage("Yvonne"));
  // outputs to the console: Hello Yvonne
  
  let thatGreeting = welcomeMessage("gregor");
  console.log(thatGreeting);
  // outputs: Hello gregor

  //...............CHALLENGE TWO.........................//

  //Write a function which returns the type of the argument we pass in. 

//Attempt 1

const checkType = value => typeof value;

console.log(checkType([20, 'squid', true, 'octopus'])); // checking the type of an array appears as an Object instead of an array.

//it appears as an object because an array is a type of object.

console.log(checkType(Boolean(1))); // 'boolean'

console.log(checkType(12));
// ouputs: number

let typeOf = "this is a string";
console.log(checkType(typeOf));
// outputs: string

//Attempt 2

//using if statements to finding the typeof value.


function findThatType(value) {
  if(typeof 12 === 'number') {
  } else if(typeof "" === 'string') {
  } else if(typeof Boolean(1) === 'boolean') {
  }
  return typeof value;
}

console.log(findThatType(['cat', 58, true, 'tree'])); // checking the type of an array appears as an Object instead of an array.

console.log(findThatType(Boolean(1))); // 'boolean'

console.log(findThatType(572));
// ouputs: number

let changeOfType = "this is a string";
console.log(findThatType(changeOfType));
// outputs: string


//Attempt 3 - Object.prototype.toString method 

//Using the method Object.prototype.toString. I have found a helpful and proficient solution to checking the type.

//using call() it will appear with the object type returning the type from the element using keyword 'return'.

//This is a brilliant way to check if the type is an array, so that it will appear as an array instead of an object.
 
 
const inspectType = (elem) => {
  const statingType = Object.prototype.toString.call(elem);
  const type = statingType.substring(
           statingType.indexOf(" ") + 1, 
           statingType.indexOf("]"));

  return type.toLowerCase();
}

console.log(inspectType(Boolean(1))); // 'boolean';

console.log(inspectType(["rabbit", "deer", "whale", "ostrich", 245, 20, true, 18])); // 'array'; This method appears as an array

console.log(inspectType(32));
// ouputs: number;

let inspection = "this is a string";
console.log(inspectType(typeOf));
// outputs: string


//..............................BONUS ROUND.....................................//

//⭐ Bonus: Examine the output we get when we check the type of an array. Why does this happen? 

//Attempt 4 

//The instanceof operator will test if the value is returned as an array. The return value is a boolean value of either true or false.

function typingThatCheck(value){
  return value instanceof Array;
  };

console.log(typingThatCheck(['frog', 'butterfly', 40, false, 'fish', 'panda'])); // This method appears as an true that it is an array.


//Attempt 5

//isArray is used in ES6 to determine if the type of element will be an array.

//isArray method is preffered than instanceof because it will work in iframes

const checkyTypeyCheck = (elemType) =>  Array.isArray(elemType);

console.log(checkyTypeyCheck(['elephant', 'penguin', 140, true, 'lion', 'starfish'])); // This method appears as an true that it is an array.