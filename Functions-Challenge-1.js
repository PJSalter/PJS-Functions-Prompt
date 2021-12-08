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

  