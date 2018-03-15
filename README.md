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

For this exercise, we're going to do something more manageable than the photorealistic ASCII art shown above. We're going to draw a few shapes using `for` loops. The exercise contains four parts, but the basic `for` loop can re-used with each part of this lab.

The goal isn't to finish all four, which are altogether more than one could get done in a couple hours at this point in your web development journey.

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
##########
##########
##########
##########
##########
##########
##########
##########
##########
##########
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

With the triangle, it will be necessary to figure out how to add one per line. This is somewhat tricky, and there several possible approaches to this 

One approach might to be put a for loop within a for loop. That approach is more complicated can be attempted if you want a challenge. Otherwise, we offer you a single hint: how could you use an array with a single for-loop?

To answer this leading question, let's look at an example.

> Run this code in your browser console (CMD+OPT+I in *Chrome*)

```js
var kardashians = ['Kim', 'Khloé', 'Kourtney']
for (var index = 0; index < kardashians.length; index++) {
  console.log(kardashians[index])
}
```

For loops are often used to iterate over arrays, meaning to go through an array, item by item, and do somthing with it.

#### Nested `for` loops

> ***Attempt this section only if you would like an additional challenge.***

Nesting `for` loops is generally something you want to avoid, especially with large inputs. How

This is a bigger hurdle to jump over since we're going to use **nested for loops**. Since we have to do a bit of research to tackle this challenge, we have a couple examples that we can work through.

> Try these examples out in your browser console (CMD+OPT+I in *Chrome*)

First try...

```js
for (var outerCounter = 0; outerCounter < 4; outerCounter++) {
  for (var innerCounter = 1; innerCounter < 4; innerCounter++) {
    console.log('outer:', outerCounter, 'inner:', innerCounter)
  }
}
```

If we make the following changes, firstly, starting `innerCounter` at 1, and secondly, substituting `4` for `outerCounter + 1`, we get...

```diff
for (var outerCounter = 0; outerCounter < 4; outerCounter++) {
- for (var innerCounter = 0; innerCounter < 4; innerCounter++) {
+ for (var innerCounter = 1; innerCounter < outerCounter + 1; innerCounter++) {
    console.log('outer:', outerCounter, 'inner:', innerCounter)
  }
}
```

Now, the inner loop is counting up to the value of the outer loop. Why is this useful? Think about how many triangles we want per line. On the first line, we want 1 triangle. On the second line, 2 triangles.

Let's rename some variables to make the connection to the problem more apparent...

```js
for (var rowNumber = 0; rowNumber < 4; rowNumber++) {
  for (var numberOfTriangles = 1; numberOfTriangles < rowNumber; numberOfTriangles++) {
   console.log('row number:', rowNumber, 'number of triangles:', numberOfTriangles + 1)
  }
}
```

### Part III: ASCII Art Pyramid

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
var DAYS_IN_MONTH = 31
var DAYS_IN_WEEK = 7
```
