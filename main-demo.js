/*
04/17/25
Main zoom live demo from Carrie
*/

// const input = require('readline-sync');

// // Sample data
// let userInput1 = "abc";
// let userInput2 = "12340";
// let userInput3 = "3141234567";

// // function with parameter and return value of true or false
// function isValidPhoneNum(userInput) {
//     return !isNaN(Number(userInput)) && userInput.length === 10;
// }

// // TODO: call function and print returns
// console.log(isValidPhoneNum(userInput1)); // false
// console.log(isValidPhoneNum(userInput2)); // false
// console.log(isValidPhoneNum(userInput3)); // true

// // Existing data to be updated
// let userPhone = "(314) 555-4567";

// function promptUserForNewPhone() {
//     let newPhone = input.question("Please enter your new phone number: \n");
//     while (!isValidPhoneNum(newPhone)) {
//         console.log("Invalid phone number. Please enter a 10-digit number. \n");
//         newPhone = input.question("Please enter your new phone number: \n");
//     }
//     return newPhone;
// }

// function formatPhone() {
//     let areaCode = isValidPhoneNum.slice(0, 3);
//     let exchange = isValidPhoneNum.slice(3, 6);
//     let line = isValidPhoneNum.slice(6);
//     return `(${areaCode}) ${exchange}-${line}`; // string interpolation
// }

// console.log(formatPhone(userInput3)); // (314) 555-4567

// function updatePhone() {
//     userPhone = formatPhone(phoneNum);
//     console.log(`Your phone number has been updated to: ${userPhone}`);
// }

// function runPhoneUpdateSequence() {
//     // ask user for new phone number
//     let newNum = promptUserForNewPhone();
//     // update their record
//     updatePhone(newNum);
//     // print confirmation message
//     console.log(`Your phone number has been updated to: ${userPhone}`);
// }

// runPhoneUpdateSequence();

// ==============================================

// EXAMPLE 1: Iterating over an array and accessing each element
let typesOfApples = ["Fuji", "Gala", "Granny Smith", "Honeycrisp", "Pink Lady"];

// TODO: loop over the types of apples and print each one in a sentence
for (let i = 0; i < typesOfApples.length; i++) {
    console.log(`I like ${typesOfApples[i]} apples.`);
}

// Same result again
for (let apple of typesOfApples) {
    console.log(`Gosh I am so hungry. I should have a ${apple} apple as a snack!`);
}

// Same result again
typesOfApples.forEach(apple => {
    console.log(`WOW. These ${apple} apples are delicious.`);
})

// .forEach() modifies original array.
//.map() creates a copy of an array and modifies the copy
// .filter() creates a copy of an array and filters the copy based on a condition
// .reduce() creates a single value from an array of values

// ==============================================

let nums = [8, 4, 0, 7, 2];

for (let num of nums) {
    try {
        if (num === 0) {
            throw new Error("You can't divide by zero like that, silly.");
        }
        let result = 100 / num;
        console.log(`100 divided by ${num} is ${result}.`);
    } catch (error) {
        console.log("Error: ", error.message);
        console.error(e);
    } finally {
        console.log("This will always run.");
    }
}
