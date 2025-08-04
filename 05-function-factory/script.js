// Starter examples (function output expectations are provided in README)

// Start coding here...
//makeMultiplier
const makeMultiplier = factor => number => factor * number;

 
const double = makeMultiplier(2);
const triple = makeMultiplier(3);
const doubleResult = double(5); // 10
const tripleResult = triple(4); // 12

document.getElementById("multiplier-output").innerHTML = `
  double(5) = ${doubleResult}<br>
  triple(4) = ${tripleResult}
`;

 
const makeGreeter = greeting => name => `${greeting}, ${name}!`;
 
const sayHi = makeGreeter("Hi");
const sayWelcome = makeGreeter("Welcome");
const greetHi = sayHi("Mia");       
const greetWelcome = sayWelcome("Leo");  

document.getElementById("greeter-output").innerHTML = `
  sayHi("Mia") = "${greetHi}"<br>
  sayWelcome("Leo") = "${greetWelcome}"
`;
