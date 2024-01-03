We can declare variables to store data by using the var, let, or const keywords.

let – is a modern variable declaration.
var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
const – is like let, but the value of the variable can’t be changed.
Variables should be named in a way that allows us to easily understand what’s inside them.


Would it be right to use upper case for birthday? For age? Or even for both?

const BIRTHDAY = '18.04.1982'; // make birthday uppercase?

const AGE = someCode(BIRTHDAY); // make age uppercase?
solution
We generally use upper case for constants that are “hard-coded”. Or, in other words, when the value is known prior to execution and directly written into the code.

In this code, birthday is exactly like that. So we could use the upper case for it.

In contrast, age is evaluated in run-time. Today we have one age, a year after we’ll have another one. It is constant in a sense that it does not change through the code execution. But it is a bit “less of a constant” than birthday: it is calculated, so we should keep the lower case for it.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Dataypes
There are eight basic data types in JavaScript.We can put any type in a variable. For example, a variable can at one moment be a string and then store a number:

// no error
let message = "hello";
message = 123456;

Programming languages that allow such things, such as JavaScript, are called “dynamically typed”, meaning that there exist data types, but variables are not bound to any of them.
Number:
Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.

alert( "not a number" / 2 ); // NaN, such division is erroneous

So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).
BigInt:
In JavaScript, the “number” type cannot safely represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives.For most purposes ±(253-1) range is quite enough, but sometimes we need the entire range of really big integers, e.g. for cryptography or microsecond-precision timestamps.BigInt type was recently added to the language to represent integers of arbitrary length. A BigInt value is created by appending n to the end of an integer.

String:
A string in JavaScript must be surrounded by quotes.

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…},

There is no character type. In some languages, there is a special “character” type for a single character. For example, in the C language and in Java it is called “char”.In JavaScript, there is no such type. There’s only one type: string. A string may consist of zero characters (be empty), one character or many of them.

Boolean (logical type):
The boolean type has only two values: true and false.Boolean values also come as a result of comparisons:

let isGreater = 4 > 1;

alert( isGreater ); // true (the comparison result is "yes").

The “null” value:
The special null value does not belong to any of the types described above.

It forms a separate type of its own which contains only the null value

The “undefined” value:
The special value undefined also stands apart. It makes a type of its own, just like null.The meaning of undefined is “value is not assigned”.If a variable is declared, but not assigned, then its value is undefined undefined is reserved as a default initial value for unassigned things.

Objects and Symbols:
The object type is special.All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.

Being that important, objects deserve a special treatment. We’ll deal with them later in the chapter Objects, after we learn more about primitives.

The symbol type is used to create unique identifiers for objects. 

The typeof operator:
The typeof operator returns the type of the operand. It’s useful when we want to process values of different types differently or just want to do a quick check.

A call to typeof x returns a string with the type name:

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

........................
There are 8 basic data types in JavaScript.

Seven primitive data types:
number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
bigint for integer numbers of arbitrary length.
string for strings. A string may have zero or more characters, there’s no separate single-character type.
boolean for true/false.
null for unknown values – a standalone type that has a single value null.
undefined for unassigned values – a standalone type that has a single value undefined.
symbol for unique identifiers.
And one non-primitive data type:
object for more complex data structures.
The typeof operator allows us to see which type is stored in a variable.

Usually used as typeof x, but typeof(x) is also possible.
Returns a string with the name of the type, like "string".
For null returns "object" – this is an error in the language, it’s not actually an object.
............................................................................................................................

Alert:
The mini-window with the message is called a modal window. The word “modal” means that the visitor can’t interact with the rest of the page, press other buttons, etc, until they have dealt with the window. In this case – until they press “OK”.

prompt:
The function prompt accepts two arguments:

result = prompt(title, [default]);
It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel. title :The text to show the visitor.....default: An optional second parameter, the initial value for the input field.
example:
 let age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`); // You are 100 years old!

confirm:
The function confirm shows a modal window with a question and two buttons: OK and Cancel.The result is true if OK is pressed and false otherwise.
let isBoss = confirm("Are you the boss?");

alert( isBoss ); // true if OK is pressed

There are two limitations shared by all the methods above:

The exact location of the modal window is determined by the browser. Usually, it’s in the center.
The exact look of the window also depends on the browser. We can’t modify it.


