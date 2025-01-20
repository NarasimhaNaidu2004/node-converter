// Importing required modules
const readline = require('readline');

// Set up the interface for user input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define the fixed exchange rate
const exchangeRate = 0.012; // 1 INR = 0.012 USD (fixed rate, adjust as needed)

// Function for converting INR to USD
function inrToUsd(inr) {
  return inr * exchangeRate;
}

// Function for converting USD to INR
function usdToInr(usd) {
  return usd / exchangeRate;
}

// Main program logic
function startConversion() {
  rl.question('Choose an option:\n1. Convert INR to USD\n2. Convert USD to INR\n3. Exit\nYour choice: ', (choice) => {
    if (choice === '1') {
      rl.question('Enter amount in INR: ', (inr) => {
        const result = inrToUsd(parseFloat(inr));
        console.log(`${inr} INR is equal to ${result.toFixed(2)} USD.`);
        startConversion(); // Ask for the next operation
      });
    } else if (choice === '2') {
      rl.question('Enter amount in USD: ', (usd) => {
        const result = usdToInr(parseFloat(usd));
        console.log(`${usd} USD is equal to ${result.toFixed(2)} INR.`);
        startConversion(); // Ask for the next operation
      });
    } else if (choice === '3') {
      console.log('Exiting the program. Goodbye!');
      rl.close(); // Close the interface
    } else {
      console.log('Invalid choice. Please try again.');
      startConversion(); // Ask for the choice again
    }
  });
}

// Start the program
startConversion();
