let message1 = prompt("Enter your name");
let message2 = prompt("Enter your name");
let random = Math.floor(Math.random() * 100 + 1);
alert("This is your compatability percentage " + random);

if (random >= 70) {
    alert("You are very compatible " + random);
} else {
    alert("You are not so compatible " + random);
}