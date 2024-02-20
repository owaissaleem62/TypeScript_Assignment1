"use strict";
/*
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/
const guests = [
    "Usama Tanveer Ahmed",
    "Malik Umair",
    "Abdul Sattar",
    "Malik Zubair",
    "Talha Khan",
    "Fahad javed",
];
// Step 1
console.log(`I can invite only two people for dinner.\n`);
// Step 2
while (guests.length > 2) {
    const removeGuest = guests.pop();
    console.log(`Sorry, ${removeGuest}, I can't invite you to dinner.`);
}
console.log("\n");
// Step 3
for (let guest of guests) {
    console.log(`Hello, ${guest}, you are still invited to dinner!`);
}
console.log("\n");
console.log(guests);
// Final Step
// Removing last two
guests.pop();
guests.pop();
// prnint empty string
console.log(`\nGuest list after dinner:`, guests);
