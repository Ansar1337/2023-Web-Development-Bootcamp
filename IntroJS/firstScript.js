// word length
let tweet = prompt("Enter the tweet you want to publish:");
let length = tweet.length;
alert("you have entered around " + length + " words. You have around " + (280 - length) + " words");

// Slicing in javascript strings
let name = "Ansar Zz";
name.slice(0, 1)  // printing first character
name.slice(0, 3)
name.slice(0, 1)

// Tweeter character Slicing
tweet = prompt("Enter the tweet you want to publish:");
alert(tweet.slice(0, 140));

// Changing the string to uppercase/lowercase
text = "Example Two";
text = text.toUpperCase();

// Capitalizing the first character of the string
text = "Example Three";
let output = text.slice(0, 1).toUpperCase() + text.slice(1,).toLowerCase();
alert(output);