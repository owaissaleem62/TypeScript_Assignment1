"use strict";
/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.guests = void 0;
const guests = [
    "Usama Tanveer Ahmed",
    "Malik Umair",
    "Abdul Sattar",
];
exports.guests = guests;
// Step 1
const guestWhoCantMakeIt = "Abdul Sattar";
console.log(`${guestWhoCantMakeIt} can't make it to Dinner\n`);
// Step 2
const NewGuest = "Fahad Javed";
const idnexOfguestWhoCantMakeIt = guests.indexOf(guestWhoCantMakeIt);
if (idnexOfguestWhoCantMakeIt !== -1) {
    guests[idnexOfguestWhoCantMakeIt] = NewGuest;
}
// step 3 
console.log("Second set of invitation messages:");
guests.forEach((guest) => {
    console.log(`Dear ${guest}, you are invited to diner.`);
});
