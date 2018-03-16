# ASCII Art

> feat. `for` loops and pair programming

## Instructions

For this lab you will be getting into pairs and working together. One person should fork the repository and add their partner as a collaborator. Work on one computer at a time, ensuring that you alternate and switch drivers at some point.

### How does pairing work?

> Put simply, *"One, the driver, writes code while the other, the observer or navigator, reviews each line of code as it is typed in. **The two programmers switch roles frequently.**" (from Wikipedia) *

Think of the driver and navigator as guidelines for your roles. You will both verbalize your problem-solving thought process *and also* act as a sounding board for the person you work with. Make sure to *strive for a balance* of coming up with ideas and listening to the ideas of your partner.

People tend to feel more self-conscious and mistake-prone when people are watching over our shoulder. The role of the navigator isn't necessarily to *critically review* the code the driver is typing in, but has a more holisitic role of guiding the conversation and relieving the driver of some of the cognitive labor.

## Lab Exercise

![ASCII picture of English lab puppy](https://i.imgur.com/noXrPGv.png)

> *from [the npm package `getdogs`](https://www.npmjs.com/package/getdogs)*.

For this exercise, we're going to do something more manageable than the photorealistic ASCII art shown above. We're going to draw a few shapes using `for` loops in the browser console using `console.log()`. The exercise contains four parts, but the basic `for` loop can re-used with each part of this lab.

The goal isn't to finish all four, which are altogether more than one could get done in a couple hours, at least at this point in your web development journey.

### Part I: ASCII Art Square

Draw a square using a for-loop. You may build a 10x10 square to start, but you also may draw any rectangle. You may use any characters of your choosing, including emojis. While the examples appear more rectangular, they are 10x10.

#### Pizza

```
🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕
🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕
🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕
🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕
🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕
🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕
🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕
🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕
🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕
🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕
```

```
# # # # # # # # # #
# # # # # # # # # #
# # # # # # # # # #
# # # # # # # # # #
# # # # # # # # # #
# # # # # # # # # #
# # # # # # # # # #
# # # # # # # # # #
# # # # # # # # # #
# # # # # # # # # #
```

> You can also use different emojis!

```
😶😐😑😬😯😮😲☺️😊🙂
😶😐😑😬😯😮😲☺️😊🙂
😶😐😑😬😯😮😲☺️😊🙂
😶😐😑😬😯😮😲☺️😊🙂
😶😐😑😬😯😮😲☺️😊🙂
😶😐😑😬😯😮😲☺️😊🙂
😶😐😑😬😯😮😲☺️😊🙂
😶😐😑😬😯😮😲☺️😊🙂
😶😐😑😬😯😮😲☺️😊🙂
😶😐😑😬😯😮😲☺️😊🙂
```

### Part II: ASCII Art Triangle
```
🔼
🔼🔼
🔼🔼🔼
🔼🔼🔼🔼
🔼🔼🔼🔼🔼
🔼🔼🔼🔼🔼🔼
🔼🔼🔼🔼🔼🔼🔼
🔼🔼🔼🔼🔼🔼🔼🔼
```

```
VVVVVVV
VVVVVV
VVVVV
VVVV
VVV
VV
V
```

There are two simple approaches to this problem that come to mind... 

#### Rows in an Array
One might involve storing each row in an array, iterating over the array with a for-loop, and printing out each item in the array in a for loop.

> Run this code in your browser console (CMD+OPT+I in *Chrome*)

```js
var kardashians = ['Kim', 'Khloé', 'Kourtney']
for (var index = 0; index < kardashians.length; index++) {
  console.log(kardashians[index])
}
```

For loops are often used to iterate over arrays, meaning to go through an array, item by item, and do something with it. In this example, we are `console.log`ging each string in the `kardashians` array.

#### String Concatenation

String concatenation is a complicated-sounding way of saying joining strings together.

Try playing around with the examples below...
```js
var coolWord = 'spatula'
console.log(coolWord)
var coolWords = 'spatula' + ' city'
console.log(coolWords)

var buildMeUpString = ''
buildMeUpString = buildMeUpString + 'I came from nothing!'
console.log(buildMeUpString)
buildMeUpString += ' Now I have 2 sentences!'
console.log(buildMeUpString)
buildMeUpString += ' I am growing so quickly.'
console.log(buildMeUpString)
```

### Part III: ASCII Art Pyramid

Check out [`.padStart` on Mozilla Developer Network (MDN)...](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)

```
     ^
    ^^^
   ^^^^^
  ^^^^^^^
 ^^^^^^^^^
^^^^^^^^^^^
```

> Or a tornado! wwwWWatch out!!

```
WWWWWWW
 WWWWW
  WWW
   W
```


### Part IV: Calendar (Bonus)


> Example, Jan 2018

```
Su Mo Tu We Th Fr Sa 
    1  2  3  4  5  6 
 7  8  9 10 11 12 13 
14 15 16 17 18 19 20 
21 22 23 24 25 26 27 
28 29 30 31
```

It may be helpful to define some constant values for use with your `for` loop.

> Hint...

```js
const DAYS_IN_MONTH = 31
const DAYS_IN_WEEK = 7
```
