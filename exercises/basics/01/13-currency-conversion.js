/**
 * Currency Formatting
 *
 * The business is breaking out into a new market and need to convert prices to USD
 * Write a function that converts a price to USD (exchange rate is 1.4 $ to £)
 */

// You are allowed to change only this function
function convertToUSD() {
    return price * 1.24;
}

const product = "You don't know JS";
const price = 19.99;
const priceInUSD = convertToUSD(price);

console.log("Product: " + product);
console.log("Price in USD: " + priceInUSD);