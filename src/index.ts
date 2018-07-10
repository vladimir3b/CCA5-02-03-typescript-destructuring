/**
 *  *********************************************************************
 *
 *     CodeCraft - Angular 5:
 *
 *     02 - ES6 JavaScript & TypeScript - Destructuring
 *
 *      - https://codecraft.tv/courses/angular/es6-typescript/destructuring/
 *
 * **********************************************************************
 */

"use strict";

// Write Javascript code!
function consoleToHTML(text: any): void {
  const appDiv = document.getElementById("app");
  if (appDiv) {
    appDiv.innerHTML += text + "<br>";
  }
}
function line() {
  consoleToHTML("--------------------------------------------------------");
}

let person = {
  firstName: "Peter",
  lastName: "Brown",
  age: 45,
  hairColor: "brown"
};

let {
  firstName: first, 
  lastName: last
} = person; //destructuring objects

consoleToHTML(first);
consoleToHTML(last);

let {firstName, lastName, age} = person; // this is a more common use

consoleToHTML(`${firstName} ${lastName} has ${age} years.`);

let v: Array<number> = [50, 60, 70, 80, 90];

let [a, b, ,c] = v; //destructuring arrays

consoleToHTML(`${a}, ${b}, ${c}`)

function add({b=5}) {
  return 10 + b;
}

consoleToHTML(add({
  person: person;
  b: 75
})) //destructuring function parameters