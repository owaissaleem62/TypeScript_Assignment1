//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

const guests: string[] = [
    "Usama Tanveer Ahmed",
    "Malik Umair",
    "Abdul Sattar",
  ];
  

guests.forEach((guest) =>
  console.log(
    `Dear ${guest},\nYou are invited to dinner at my home. It would be an honor to have your presence.\n\nSincerely,\nOwais Saleem\n`
  )
);
