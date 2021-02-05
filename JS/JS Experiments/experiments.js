const monthlyRent = 500;

const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);

const firstName = "fName";
const lastName = "lName";

const sentence = "Hello " + firstName + " " + lastName + "! How are you!?";
const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you!?`;

console.log(sentence);
console.log(sentenceWithTemplate);

let nameStr = "Hello"
nameStr = "Hey"
console.log(nameStr)

var nameStr2 = "Hey"
nameStr2 = "Second same string"
console.log(nameStr2)


// JS is a dynamic language. Others are statically typed language.
//Control Flows 
let flagValue = true
console.log(flagValue)
flagValue = "in JS you can change that"
console.log(flagValue)
flagValue = 10
console.log(flagValue)

// premitive types 
const num = 56;
console.log(num)

//Number.MAX_SAFE_INTEGER Print this in console for biggest number.


//Control Flow
const isSkyBlue = true;

if (isSkyBlue) {
    console.log("The sky is blue!");
} else {
    console.log("The sky is … not blue?");
}

let isSkyClear ;

let greeting

isSkyClear = true

if (isSkyClear) {
    greeting = "The sky is blue!"
} else {
    greeting = "The sky is … not blue?"
}

console.log(greeting)

///// Coercion in JavaScript https://frontendmasters.com/courses/javascript-coercion/
if (2 + 2 === 4) {
    console.log("Yayy!")
} else {
    console.log("Woops")
}

if (2 + 2 == "4") {
    console.log("Yayy!")
} else {
    console.log("Woops")
}

if (2 + 2 === "4") {
    console.log("Yayy!")
} else {
    console.log("Woops")
}



//// Condition

const friendsAtYourParty = 10;

if (friendsAtYourParty === 0) {
    console.log("Cool, now I have a lot of nachos to myself.");
} else if (friendsAtYourParty <= 4) {
    console.log("Perfect amount to play some Mario Kart.");
} else {
    console.log("Wooooo turn on the dance music!");
}


// Loops

let friendsAtParty = 0

friendsAtParty = friendsAtParty + 1

//while 

while(friendsAtParty < 10) {
    friendsAtParty = friendsAtParty + 1
    // friendsAtParty += 1
    // friendsAtParty /= 1
    // friendsAtParty *= 1
    // friendsAtParty++
}

console.log(friendsAtParty)

//Comment 1

/* comment 2 */

//for loop

let friendsAtTheParty = 0;
for (let i = 0; i <= 10; i++) {
    friendsAtTheParty++;
}
console.log(friendsAtYourParty);

let baseStr = ""

for (let i= 0; i < 5; i++) {
    baseStr += "f"
}

console.log(baseStr)


//Functions

function addTwo(number) { // with args
    return number + 2;
}

const finalAnswer = addTwo(5);
console.log(finalAnswer);

function returnFive() { //without arg
    return 5;
}

function add(num1, num2) { //mulitple args
    return num1 + num2
}

console.log(returnFive()) //calling a function 
console.log(add(5,5))
console.log("value:",addTwo(5)) 
console.log(addTwo) // This will returns the function not calling it.

// using multiple values

function greet(firstName, lastName, honorific, greeting) {
    return `${greeting} ${honorific} ${lastName}! I’m extremely pleased you could join us, ${firstName}! I hope you enjoy your stay, ${honorific} ${lastName}.`;
}

console.log(greet("Brian", "Holt", "Lord", "Salutations"));
console.log(greet("Jack", "Sparrow", "Captain", "A-hoy"));



//Scope
function addFive(number) {
    const someVariable = "you can't see me outside this function";
    console.log(strVariable)
    return number + 5;
}

const strVariable = `test value`

addFive(10); // This will print strVariable because it is now in the scope as method is called after the variable created.

console.log(someVariable); // Out of scope.


const A = "A";
let F;

function doStuff(B) {
    console.log(B);
    const C = "C";
    let H = "H";
    if (1 + 1 === 2) {
        const D = "D";
        H = "something else";
    }
    console.log(D); // This won't work as this is out of scope
    console.log(H); // In scope
    F = "F"; // In scope
}

let E = 0;
while (E < 3) {
    E++; // In Scope
    console.log(A); // In Scope
    const G = "G"; 
}
console.log(E); // In Scope
console.log(G); // Out of scope

doStuff("B");
console.log(B); // No variable B available
console.log(C); // Out of scope
console.log(F); // In Scope


let something = "Outside of the scope";

if(true) {
    let something = "Inside of the scope";
    console.log(something)
}
console.log(something)


function thing() {
    let something = "Outside of the scope";

if(true) {
    let something = "Inside of the scope";
    console.log(something)
}
console.log(something)
}
console.log(something)

thing();

//Built in functions

const sentence = "ThIs HaS wEiRd CaSiNg On It";
console.log(sentence.toLowerCase());

//substring
const nametemp = "Brian Holt";
console.log(nametemp.substr(6, 3));

// For more built in objects -  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/

