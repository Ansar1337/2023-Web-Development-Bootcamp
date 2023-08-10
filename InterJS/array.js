let array = ["Ansar", "Sasha", "John"];

// Inserts item(s) in an array
array.push("Casey");

// Removes the last element from an array
array.pop();

console.log(array)

let names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whoIsPaying(names) {
    let random = Math.floor(Math.random() * names.length);
    return names[random] + " is going to buy lunch today!";
}

console.log(whoIsPaying(names));