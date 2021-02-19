const myName = 'David'; // My name
const myFavoriteFood = 'fried chicken'; // My favorite food
let myCity = 'Portland'; // PDX 4 lyfe
let myState = 'OR'; // Respective to myCity
let myAge = 31; // My human age
let earlyYears = 2; // Accounting for larger difference in early dog years
earlyYears *= 10.5;
let laterYears = myAge - 2; // Accounting for later years difference in dog years
laterYears *= 4; // Reassigning laterYears
let myAgeInDogYears = earlyYears + laterYears; // My age in dog years
console.log(`My name is ${myName}. I live in ${myCity}, ${myState}, and my favorite food is ${myFavoriteFood}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`); // Prints my name, favorite food, where I live, and my age in dog years.
// Forecast today
const kelvin = 283;
// Converting celsius to kelvin
let celsius = kelvin - 273;
// Converting fahrenheit to celsius
let fahrenheit = celsius * (9/5) + 32;
// Rounding fahrenheit down
fahrenheit = Math.floor(fahrenheit);
// Converting to newton
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The current temperature in ${myCity} is ${kelvin} degrees Kelvin, which is ${celsius} degrees Celsius, ${fahrenheit} degrees Fahrenheit, and ${newton} degrees Newton.`); // Prints the temperature in myCity in K, F, C and N
console.log('Thank you for coming to my TED Talk.');