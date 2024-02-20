// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(
  size: string = "Large",
  message: string = "I love TypeScript"
): void {
  return console.log(`Size: ${size}, Message: '${message}'`);
}

//  default output
make_shirt();

// Medium shirt with default message
make_shirt("Medium");

// Custom shirt with a different message and size
make_shirt("Small", "Please Subscribe TypeScript insigts!");
