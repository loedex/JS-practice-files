//Template Srings: 
// Templates are strings enclosed in backticks. They allow single and double quotes in strings and allow multiline strings.

let str = `  I'm Husnain Ahmad, Student of "Software Engineering"  `; //we'll use this string for practice throughout the program. 
console.log(str);

// To find the length of a string:
console.log(`Lenght of String = `,str.length); //returns number of characters, also counts spaces and symbols.

//JavaScript String Methods

//charAt() Returns character at specified index
let i = 2;
console.log(`Character at `,i,`index is : `,str.charAt(i)); //index starts from 0

//charCodeAt() Returns UTF-16 code of character at specified index
console.log(`UTF-16 Code of `,i,`th character : `,str.charCodeAt(i));

//codePointAt() Also returns UTF-16 code
console.log(`Code at `,i,`is : `,str.codePointAt(i));

//at() returns character at specified index
console.log(`Character at `,i,`index is : `,str.at(i));

/*slice() extracts a part of string and returns the extracted part in a new string. This method takes
two parameters: start position(included) and end position(not included) */
//Note that Slicing does not change the original string.
//Normal Slicing:
console.log(str.slice(0,5));
console.log(str.slice(4,17));

//Using only start: till end
console.log(str.slice(17)); //if second parameter is missed it goes till end then. 

//Negative Index
console.log(str.slice(-3));

console.log(`Negative Start and End`,str.slice(-1,-13)); // his statement will not show anything because start index is greater than end. So: 
console.log(str.slice(-13,-1));

//when start is greater than end , then empty string is returned
console.log(str.slice(5,2));

//When out of range index:
console.log(str.slice(0,70)); //it then safely extacts till end and throws no error. 
console.log(str.slice(60,70)); // returns empty string

//Using Slice to remove Part of String: 
let text = "JavaScript"
let newText = text.slice(0,4);
console.log("New Text : ",newText);




/*substring() */
console.log(str.substring(5,2)); // unlike slice() it automatically swaps the values if start is > end. so it becomes substring(2,5). It is major difference from slice()

// In substring(), negative index vaues are treated as zeros.
console.log(str.substring(-4,5)); //It will automatically become as : substring(0,5)

/* toUpperCase() */
//string is converted to Uppercase:
console.log(str.toUpperCase()); //displays string in Upper case letters
console.log(str); // Original string still remains same and unchanged

/* toLowerCase() */
console.log(str.toLowerCase());

/* trim() */
//removes whitespace from both sides of string: 
console.log(str.trim());

/*trimStart()*/
//removes whitespace only from start of string:
console.log(str.trimStart());

/*trimEnd()*/
//removes whitespace only from end:
console.log(str.trimEnd());


/*padStart()*/
//pads a string fcrom the start. It pads a string with another string multiple times untill it reaches a given length:
let str2 = "Hello";
let paddedStr = str2.padStart(8,str2);
console.log(paddedStr);

/*padEnd()*/
//pads a string from the end:
paddedStr = str2.padEnd(8,str2);
console.log(paddedStr);

/*repeat()*/
//returns string with a number of copies:
console.log(str2.repeat(3));

/*replace()*/
//replace a specified value with another value in a string. replace() is case sensitive:
text = "I like JavaScript";
newText = text.replace("like","love");
console.log(newText);
console.log(text); // the original string remains unchanged and same. 


/*split()*/
//convert a string into an array by breaking it at specific point:
console.log(text.split());
console.log(text.split(""));
console.log(text.split(" "));
console.log(text.split("",5)); //stops after 5 pieces
console.log(text); //original string remains unchanged

text = "Picture.jpg;"
console.log(text.split(".")[1]); //splits on dot and then displays the value at 1 index.

/*indexOf()*/
text = "Hello World";
console.log(text.indexOf("o"));

/*lastIndexOf()*/
console.log(text.lastIndexOf("o"));

/*search()*/
console.log(text.search("o"));

/*match()*/
console.log(text.match("World"));

/*startsWith()*/
//returns true if a string starts with a specified value. This method is case sensitive.
console.log(text.startsWith("He"));

/*endsWith()*/
// returns true if a string ends with a specified value. This method is case sensitive.
console.log(text.endsWith("D"));


//Note:
/*All String Methods return a new value. They don't change the original string*/

/*Practice*/
let Str = "The amount is Rs 100000";
//print the amount value: 
console.log("The amount is Rs ".length)
let amount = Str.slice("The amount is Rs ".length);
console.log(amount);

//What is the type of amount now ?? 
console.log(typeof amount);

//How to convert this string into number: 
amount = Number.parseInt(Str.slice("The amount is Rs ".length));
console.log(amount);
console.log(typeof amount);

const a=[1,2,3];
console.log(a.toString());
console.log(a.join("*"));

//pop()
// The pop() method removes the last element from an array:
// The pop() method returns the value that was "popped out":
console.log(a.pop());
console.log(a);
console.log(a.length);

//push()
// The push() method adds a new element to an array at the end:
// The push() method returns the new array length:
a.push(7);
console.log(a.push(8));
console.log(a);

//shift()
// The shift() method removes the first array element and "shifts" all other elements to a lower index.
// The shift() method returns the value that was "shifted out":
console.log(a.shift());
console.log(a);
console.log(a.length);

//unshift()
// The unshift() method adds a new element to an array at the beginning, and "unshifts" older elements:
// The unshift() method returns the new array length:
console.log(a.unshift(5));
console.log(a);

//delete()
delete a[0];
console.log(a);

/*Merging Arrays / Concatenating Arrays */
const A = [1,2,3,4,5];
const B = [6,7,8,9,10];
const C = [11,12,13,14,15];
console.log(A.concat(C,B,"Hello"));
console.log(A.concat(C,B,"Hello").length);

//copyWithin()
const D = [1,2,3,4,5,6,7,8,9,10]
console.log(D);
console.log(D.length);
D.copyWithin(2,0);
console.log(D);
D.copyWithin(7,0,2);
console.log(D);

//flat()
// The flat() method creates a new array with sub-array elements concatenated to a specified depth:
const E = [1,[2,3],[4,5,6,7],8,[9,10]];
console.log(E.flat());
console.log(E.length);
console.log(E.flat().length);

//map()
const F = [1,2,3,4,5];
let r = F.map(x => [x,x*2]); //we are returning an array so we used box brackets. and we know that we can omit return keyword in Arrow Function
console.log(r);
console.log(F.length);
console.log(r.length);

//Remove Empty Values using flatMap():
let G = ["Hello"," ","World"," "];
console.log(G);
let R = G.flatMap(x => x===" "? []:x);
console.log(R);


//splice()
const H = ["A","B","C","D","E"];
H.splice(2,0,"Kiwi"); // It also changes the original array
console.log(H);
console.log(H.length);
console.log(H.splice(2,1,"Apple")); //returns the value that was deleted
console.log(H);
// Now just remove "Apple" from the arrayy:
console.log(`Removed Value: `,H.splice(2,1));
console.log(H);
console.log(H.toSpliced(2,0,"Apple")); //toSpliced() method is a safe way to splice an array because it doesn't change the original array.
console.log(H);