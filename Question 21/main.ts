// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

const perfume = {
    name: "Dunhill Desire",
    price: 49.99,
    description: "A delightful blend of floral notes, perfect for everyday wear."
};

// define an array of objects
const perfumes: (typeof perfume)[] = [];

// pushing multipul object
perfumes.push(perfume);

perfumes.push({
    name: "Armani",
    price: 39.99,
    description: "A refreshing burst of citrus with hints of tropical fruits, ideal for summer."
});

const perfume3 = {
    name: "Tom Ford",
    price: 59.99,
    description: "An exotic combination of spices and musk, great for special occasions."
};

perfumes.push(perfume3);

perfumes.push({
    name: "Bonanza Satrangi",
    price: 54.99,
    description: "A sophisticated blend of woody and earthy notes, perfect for evening wear."
});

// function to display perfumes
function displayperfumes(perfumes: typeof perfume[]) {
  for (let i of perfumes) {
    console.log(`
        ${i.name}
        ${i.description}
        price: ${i.price} USD
        ______________\n`);
  }
}

displayperfumes(perfumes);
