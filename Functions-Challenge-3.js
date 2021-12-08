//...............................CHALLENGE THREE................................//

//Write a function which returns the length of the string we pass in. 

function checkLength(str){
    let theLength;
    return str.length;
  }
  
  const theLength = checkLength("Around the World");
  console.log(theLength);
  // outputs: 16
  
  console.log(checkLength("One More Time"));
  // outputs: 13
  
  //Bonus Attempts
  
  //⭐ Bonus: Can we use the length property on other types of variable? What else might this be useful for?
  
  //You can find the length of number of elements in an array
  
  const findHowLong = arr => arr.length;
  
  console.log(findHowLong(["Halloween", "Ghost", "Zombie", "skeleton", "vampire", "season"])); //returns 6
  
  console.log(findHowLong(["dolphin", "swordFish", "whale", "shark", "piranha", "octopus", "squid", "crab", "lobster", "seal", "seaHorse", "jellyFish", "shellFish", "catFish", "stingRay"])); // returns 15.
  
  console.log(findHowLong(["tree", "nature", "mushroom", "grass", "bird", "squirrel", "mountain"])); //returns 7
  
  function howManyFruits(arr){
     let totalFruits;
     return arr.length;
  };
  
  const totalFruits = howManyFruits(["apple", "kiwi", "orange"]);
  console.log(totalFruits); //returns 3.
  
  console.log(howManyFruits(["strawberry", "pear", "grape", "banana", "pomegranate"])); // returns 5.
  
  //The length method can also tell the amount of parameters a function will have 
  
  const totalparam = (param1, param2, param3, param4) => {};
  
  console.log(totalparam.length); //returns 4.
  
  function isThereALength() {};
  
  console.log(isThereALength.length); //returns 0.
  
  
  