//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "owais Saleem";

console.log("Lowercase:", personName.toLowerCase());

console.log("Uppercase:", personName.toUpperCase());

const newName = personName
  .split(" ")
  .map((l) => l[0].toUpperCase() + l.substr(1))
  .join(" ");

console.log("Titlecase:", newName);
