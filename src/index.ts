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

