// main.js

// Importing add and subtract functions from mathOperations.js
import { add, subtract } from '/mathOperations.js';


let resultAdd = add(5, 3); 
let resultSubtract = subtract(10, 4); 

// Logging the results to the console
console.log(`Result of adding: ${resultAdd}`); // Output: Result of adding: 8
console.log(`Result of subtracting: ${resultSubtract}`); // Output: Result of subtracting: 6

// Displaying results in HTML
document.getElementById('add-result').textContent = `Result of adding: ${resultAdd}`;
document.getElementById('subtract-result').textContent = `Result of subtracting: ${resultSubtract}`;
