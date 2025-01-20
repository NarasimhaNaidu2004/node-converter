// Fixed exchange rates
const exchangeRate = {
  INRtoUSD: 0.012,  // 1 INR to USD
  USDtoINR: 83.5    // 1 USD to INR
};

const convertCurrency = (amount, fromCurrency, toCurrency) => {
  let convertedAmount;

  if (fromCurrency === 'INR' && toCurrency === 'USD') {
    convertedAmount = amount * exchangeRate.INRtoUSD;
  } else if (fromCurrency === 'USD' && toCurrency === 'INR') {
    convertedAmount = amount * exchangeRate.USDtoINR;
  } else {
    console.log('Invalid currency conversion request');
    return;
  }

  console.log(`${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`);
};

// Command-line arguments
const args = process.argv.slice(2);
if (args.length !== 3) {
  console.log('Usage: node currencyConverter.js <amount> <fromCurrency> <toCurrency>');
  console.log('Example: node currencyConverter.js 100 INR USD');
} else {
  const [amount, fromCurrency, toCurrency] = args;
  convertCurrency(parseFloat(amount), fromCurrency.toUpperCase(), toCurrency.toUpperCase());
}
