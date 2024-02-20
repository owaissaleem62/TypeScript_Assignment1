// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

const magicianNames: string[] = [
  "Harry Porter",
  "David Copperfield",
  "Hermione Granger",
  "Professor Albus Dumbledore",
  "Ron Weasley",
];

function show_magicians(magicians: string[]): void {
  for (const items of magicians) {
    console.log(items);
  }
}

show_magicians(magicianNames);

