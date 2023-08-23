// Challenge:
document.querySelector('ul').lastElementChild.innerHTML = 'Ansar';

// SELECTING HTML ELEMENTS USING TAGS AND IDS

// Different ways of selecting the html/css elements:
document.getElementsByTagName('li');
// Using this we get a list of items, if there is a single item also we get a list

// To Select an element from the list of elements:
document.getElementsByTagName('li')[0];

// Get element by ID
document.getElementById("title").style.color = "cyan";

document.getElementById('title').innerHTML = "Hello World"

// SELECT THE ELEMENTS USING CSS SELECTORS
document.querySelector('#title');

// class selectors
document.querySelector(".container").style.color = "red";

// html hierarchical selectors
document.querySelector("li a").style.color = "green";

// selecting all elements
document.querySelectorAll(".container").style.color = "green";

// manipulating font size property
document.querySelector('h1').style.fontSize = "18rem";

// manipulating button font size property
document.querySelector('button').style.fontSize = "2rem";

// manipulating button background color property
document.querySelector('button').style.background = "yellow";