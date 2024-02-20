/* Exersise 18:
Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/

// Step 1

const travelDestinations: string[] = [
    "Dubai, UAE",
    "Bali, Indonesia",
    "London, UK",
    "Hanoi, Vietnam",
    "Marrakech, Morocco"
];

// Step 2
console.log("Origional Order:");
console.log(travelDestinations);

// step 3
console.log("\n Alphabetical order without modifying the actual list");
console.log([...travelDestinations].sort());

// Step 4
console.log("\nShowing array is still in its original order");
console.log(travelDestinations);

// step 5
console.log("\n Reverse Alphabetical order without modifying the actual list");
console.log([...travelDestinations].sort().reverse());

// Step 6
console.log("\nShowing array is still in its original order");
console.log(travelDestinations);

// Step 7
console.log("\nReverse Order");
travelDestinations.reverse();
console.log(travelDestinations);

// Step 8
console.log("\nBack to Original");
travelDestinations.reverse();
console.log(travelDestinations);

// Step 9
console.log("\nChange to Alphabatical order");
travelDestinations.sort();
console.log(travelDestinations);

// Final Step
console.log("\nChange to Reverse Alphabatical order");
travelDestinations.sort().reverse();
console.log(travelDestinations);
