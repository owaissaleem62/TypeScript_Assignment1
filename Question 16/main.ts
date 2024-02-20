/* 
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
*/

const guests: string[] = [
    "Usama Tanveer Ahmed",
    "Malik Umair",
    "Abdul Sattar",
];


//Step 1 
for (let guest of guests) {
    console.log(`Hello, ${guest}, we found a bigger dinner table.\n`)
}

// step 2 
const newGuestAtBegining: string = "Malik Zubair" 
guests.unshift(newGuestAtBegining)


//  step 3
const newGuestInMiddle: string = "Ghulam Mustafa"
const middleIndex: number = Math.floor(guests.length/2)
guests.splice(middleIndex, 0, newGuestInMiddle)


//  step 4
const newGuestAtEnd: string = "Ezan Shaikh"
guests.push(newGuestAtEnd)


// Final Step 

console.log("New set of invitation messages with begining and middle name changes:\n")

for(let guest of guests) 
{
    console.log(`Dear ${guest}, you are invited to dinner`)
}

