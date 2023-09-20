import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const myElement = <h1>React is {5 + 5} times better with JSX</h1>
const myElement1 = (
    <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
    </ul>
);
//one top level element
const myElement2 = (
    <div>
        <p>I am a paragraph</p>
        <p>I am another paragraph</p>
    </div>
);
//JSX follows XML rules, and therefore HTML elements must be properly closed.
//The class attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the class keyword is a reserved word in JavaScript, you are not allowed to use it in JSX.

//Use attribute className instead.

const myElement3 = <h1 className="myclass">Hello World</h1>;


//React supports if statements, but not inside JSX.
// To be able to use conditional statements in JSX, you should put the if statements outside of the JSX, or you could use a ternary expression instead:

const x = 5;
let text = "Goodbye";
if(x < 10) {
    text = "Hello";
}

const myElement4 = <h1>{text}</h1>;

//Use ternary expressions instead:

const myElement5 = <h1>{x > 10 ? "Hello" : "Goodbye"}</h1>;

root.render(myElement5);