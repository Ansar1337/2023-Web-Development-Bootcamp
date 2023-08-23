let array = [];
let num = 5;

function fizzBuzz() {
    for (let i = 0; i <= num; i++) {
        let random = Math.floor(Math.random() * 100 + 1);
        if (random % 3 === 0 && random % 5 === 0) {
            array.push("FizzBuzz");
        } else if (random % 3 === 0) {
            array.push("Fizz");
        } else if (random % 5 === 0) {
            array.push("Buzz")
        } else {
            array.push(random);
        }
    }
}

fizzBuzz();
console.log(array);