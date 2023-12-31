// While loops
let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

// FizzBuzz
function fizzBuzz() {
    let count = 1;
    let output = [];

    while (count <= 100) {

        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz");
        } else if (count % 3 === 0) {
            output.push("Fizz");
        } else if (count % 5 === 0) {
            output.push("Buzz");
        } else {
            output.push(count);
        }
        count++;
    }
    console.log(output);
}

fizzBuzz();

// Beer challenge
i = 100;
while (i > 0) {
    if (i > 1) {
        console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take 1 down, pass it around, " + (i - 1) + " bottles of beer on the wall.");
    } else if (i === 1) {
        console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take 1 down, pass it around, no bottles of beer on the wall.");
        console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
    }
    i--;
}

// For loops
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// FizzBuzz using for loop:
function fizzBuzz2() {
    let output = []

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output.push("FizzBuzz");
        } else if (i % 5 === 0) {
            output.push("Buzz");
        } else if (i % 3 === 0) {
            output.push("Fizz");
        } else {
            output.push(i)
        }
    }
    return output;
}

console.log(fizzBuzz2());

// Fibonacci sequence
function fibonacciGenerator(n) {
    let sequence = [];

    for (let i = 0; i < n; i++) {
        if (sequence.length > 1) {
            let sum = sequence[i - 2] + sequence[i - 1];
            sequence.push(sum);
        } else {
            sequence.push(i);
        }
    }
    return sequence;
}

console.log(fibonacciGenerator(10));