      // This is an in-line comment.
/* This is a
multi-line comment */  //Task1 :-Comment Your JavaScript Code
var myName; //Task2:- Declare JavaScript Variables
var a;
a = 7 ; // Task3:- Storing Values with the Assignment Operator
var a; // Task4:- Assigning the Value of One Variable to Another
a = 7;
var b;
b=7;
b = a;
var a = 9; //Task5:-Initializing Variables with the Assignment Operator
var myFirstName = "Sahitya"; //Task6:-Declare String Variables
var myLastName = "Singh";
// Only change code below this line
var a;   
var b;
var c;
a = 5;
b = 10;
c = "I am a";
// Only change code above this line

a = a + 1;  //Task7:- Understanding Uninitialized Variables
b = b + 5;
c = c + " String!";
// Variable declarations
var studlyCapVar; //Task8:-Understanding Case Sensitivity in Variables
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
let catName = "Oliver";
let catSound = "Meow!"; //Task9:-Explore Differences Between the var and let Keywords
const FCC = "freeCodeCamp"; // Change this line //Task10:-Declare a Read-Only Variable with the const Keyword
let fact = "is cool! "; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line
const sum = 10 + 10; //Task11:-Add Two Numbers with JavaScript
const difference = 45 - 33; //Task12:-Subtract One Number from Another with JavaScript
const product = 8 * 10; //Task13:-Multiply Two Numbers with JavaScript
const quotient = 66 / 33; //Task14:-Divide One Number by Another with JavaScript
let myVar = 87;

// Only change code below this line
myVar++; //Task15:-Increment a Number with JavaScript
let myVar = 11;
myVar--; //Task16:-Decrement a Number with JavaScript
var myDecimal = 5.7; //Task17:-Create Decimal Numbers with JavaScript
const product = 2.0 * 2.5; //Task18:-Multiply Two Decimals with JavaScript
var quotient = 4.4 / 2; // Task19:-Divide One Decimal by Another with JavaScrip
var remainder = 8%3; //Task20:-Finding a Remainder in JavaScript
let a = 3;
let b = 17;
let c = 12;

//Task21:- Compound Assignment With Augmented Addition
a+= 12;
b+= 9;
c+= 7;
let a = 11;
let b = 9;
let c = 3;

//Task22:- Compound Assignment With Subtraction
a -= 6;
b -=15;
c -=1;
let a = 5;
let b = 12;
let c = 4.6;

// Task23:- Compound Assignment With Augmented Multiplication
a *= 5;
b *= 3;
c *=10;
let a = 48;
let b = 108;
let c = 33;

// Task24:- Compound Assignment With Augmented Division
a /= 12;
b /= 4;
c /= 11;
const myStr = "I am a\"double quoted\" string inside \"double quotes\".";// Task25:-Escaping Literal Quotes in Strings
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>'; //Task26:-Quoting Strings with Single Quotes
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; //Task27:-Escape Sequences in Strings
const myStr = "This is the start."+" This is the end."; //Task28:-Concatenating Strings with Plus Operator
let myStr="This is the first sentence.";
myStr+= " This is the second sentence."
//Task29:-Concatenating Strings with the Plus Equals Operator
// Task30:-Constructing Strings with Variables
const myName = "Sahitya";
const myStr = "hi,"+myName +" Singh";
const someAdjective = "codeforce is awsome"; //Task31:-Appending Variables to Strings
let myStr = "Learning to code is ";
myStr +=someAdjective;
let lastNameLength = 0; //Task32:-Find the Length of a String
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;
console.log(lastName.length);
let firstLetterOfLastName = ""; //Task33:-Use Bracket Notation to Find the First Character in a String
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line
let myStr = "Jello World"; //Task34:-Understand String Immutability

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line 

const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2];// task35:-Use Bracket Notation to Find the Nth Character in a String
// Setup
const lastName = "Lovelace";
//Task36:-Use Bracket Notation to Find the Last Character in a String
// Only change code below this line
const lastLetterOfLastName = lastName[3]; 
const lastLetter = lastName[lastName.length - 1];
const lastName = "Lovelace";

// Task37:-Use Bracket Notation to Find the Nth-to-Last Character in a String
const secondToLastLetterOfLastName = lastName[6];
const thirdToLastLetter = secondToLastLetterOfLastName[secondToLastLetterOfLastName.length - 3];
const myNoun = "dog"; //Task38:- Word Blanks

const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
var wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";
const myArray = ["hi", 9]; //Task39:-Store Multiple Values in one Variable using JavaScript Arrays
// Only change code below this line
const myArray = [["Bulls", 23]]; //Task40:-Nest one Array within Another Array
const myArray = [50, 60, 70];
var myData =myArray[0]; //Task41:- Access Array Data with Indexes
const myArray = [18, 64, 99]; //Task42:-Modify Array Data With Indexes
myArray[0]=45;
myArray[1]=64;
myArray[2]=99;
const myArray = [
      [1, 2, 3],   
      [4, 5, 6],
      [7, 8, 9],
      [[10, 11, 12], 13, 14],
    ];
  
    const myData = myArray[2][1]; //Task43:-Access Multi-Dimensional Arrays With Indexes
    const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]); //Task44:-Manipulate Arrays With push()
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop() //Task45:-Manipulate Arrays With pop()
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();//Task46:-Manipulate Arrays With shift()
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]) //Task47:- Manipulate Arrays With unshift
var myList = [
      ["Canned Beans", 3],
      ["Milk Galon", 1],
      ["Cereal", 2],
      ["Toilet Paper", 12],
      ["Sack of Rice", 1]
    ]; //Task48:-Shopping List
    function reusableFunction() {
      console.log("Hi World");
    }
  
    // Call the function
    reusableFunction(); //Task49:-Write Reusable JavaScript with Functions
    var a,b; //Task50:-Passing Values to Functions with Arguments
function functionWithArgs(a, b){
  console.log(a+b);
}
functionWithArgs(1,2);
functionWithArgs(7,9);
function timesFive(a){ //Task51:-Return a Value from a Function with Return
      return (5*a);
    }
    timesFive(5);
    timesFive(2);
    timesFive(0);
    let myGlobal=10; //Task52:-Global Scope and Functions
let oopsGlobal;
function fun1() {
  // Assign 5 to oopsGlobal Here
oopsGlobal=5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
function myLocalScope() {
      // Only change code below this line
      let myVar;
      console.log('inside myLocalScope', myVar); //Task53:-Local Scope and Functions
    }
    myLocalScope();
  
    // Run and check the console
    // myVar is not defined outside of myLocalScope
    console.log('outside myLocalScope', myVar);
    const outerWear = "T-Shirt"; //Task 54:-Global vs. Local Scope in Functions

function myOutfit() {
  // Only change code below this line
   let outerWear ="sweater";
  // Only change code above this line
  return outerWear;
}
 myOutfit();
  // Setup
let sum = 0; //Task55:-Understanding Undefined Value returned from a Function

function addThree() {
  sum = sum + 3;
}

// Only change code below this line


// Only change code above this line
function addFive(){
  sum =sum+5 ;
}
addThree();
addFive();
let processed = 0; //Task57:-Assignment with a Returned Value

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
function nextInLine(arr, item) {
      // Task57:-Stand in Line
      arr.push(item);
      var removed = arr.shift();
      return removed; // Change this line
    }
    function welcomeToBooleans() {
      // Task58:-Understanding Boolean Values
    
      return false; // Change this line
    
      // Only change code above this line
    }
  
    // Setup
    const testArr = [1, 2, 3, 4, 5];
  
    // Display code
    console.log("Before: " + JSON.stringify(testArr));
    console.log(nextInLine(testArr, 6));
    console.log("After: " + JSON.stringify(testArr));