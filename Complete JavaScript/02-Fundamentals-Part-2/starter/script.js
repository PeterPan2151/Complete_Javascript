"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// function logger() {
//   console.log("My name is peter");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// Arrow function
// const calcAge = (birthyear) => 2026 - birthyear;
// console.log(calcAge(2000));

// const calcAge = function (birthYear) {
//   return 2026 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//   } else {
//     console.log(`${firstName} has already retired 🎉`);
//     return -1;
//   }
//   return retirement;
//   //   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "Peter"));
// console.log(yearsUntilRetirement(1950, "Diana"));

const friend1 = "Pter";
const friend2 = "Diana";
const friend3 = "Damian";

const friends = ["Peter", "Diana", "Damian"];
console.log(friends);

const years = new Array(2000, 2002, 2004, 2008);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);
