/*
    Arrays Practice
    In these exercises your refridgerator is going to be represented by an array.
    let fridge = ["milk", "cheese", "butter"];
    
    Each element of the array is an item in your fridge.

    Complete the Following Exercises.
*/

/* ------------------------------------------------
    Exercise One
    Checking if you have something in the fridge
*/
console.log("Exercise One - fridgeContains"); // Ignore the console.log() at the beginning of each exercise.  These are to make the console output more readable :)

let fridge = ["milk", "cheese", "butter"];

function fridgeContains(item) {
  return fridge.includes(item);
}

console.log(fridgeContains("milk")); // This should be true
console.log(fridgeContains("butter")); // This should be true
console.log(fridgeContains("chicken")); // This should be false

/* ------------------------------------------------
  Exercise Two
  Putting something in the fridge

  Put the item into the fridge.

  However, If the fridge already contains the item, don't add another!
  Hint: That means you will have to check if an item is in the fridge first!

  Here is the pseudo code of what needs to happen:
  if the item does not exist in the fridge
    then add it 
  
*/
console.log("Exercise Two - putItemIntoFridge");

fridge = ["milk", "cheese", "butter"];

function putItemIntoFridge(item) {
  if (!fridgeContains(item)) {
    fridge.push(item);
  }
}

putItemIntoFridge("spinach");
console.log(fridge); // It should now have spinach!
// ["milk", "cheese", "butter", "spinach"]

putItemIntoFridge("leftovers");
console.log(fridge); // It should now have leftovers!
// ["milk", "cheese", "butter", "spinach", "leftovers"]

putItemIntoFridge("milk");
console.log(fridge); // The fridge already contains milk, so it should not be listed twice!
// ["milk", "cheese", "butter", "spinach", "leftovers"]

/* ------------------------------------------------
  Exercise Three
  Taking something out of the fridge

  After you take something out of the fridge, then the fridge no longer contains that item.
  
  Given the name of an item, 
  if it exists in the fridge then remove it and return the item
  if it doesn't exist in the fridge, then return null;

  Hint: You can use indexOf() to figure out the index of the item.
  Then you can use splice to remove one item at that index.
  Look up the documentation for Index of:
  https://www.w3schools.com/jsref/jsref_indexof_array.asp
  and Splice:
  https://www.w3schools.com/jsref/jsref_splice.asp
*/
console.log("Exercise Three - removeItemFromFridge");

fridge = ["milk", "cheese", "butter"];

function removeItemFromFridge(item) {
  let index = fridge.indexOf(item);
  if (index < fridge.length) {
    fridge.splice(index, 1);
  }
}

removeItemFromFridge("milk");
removeItemFromFridge("butter");

console.log(fridge); // Now it should only have "cheese" in it

/* ------------------------------------------------
  Exercise Four
  
  Print out every item in the fridge.

  Use a while loop to console.log() every item.

  Hint: Take a look at the arrays reading in the "Logging to the Console" section of "Using an array with a Loop"
*/
console.log("Exercise Four - listItems");

fridge = ["milk", "cheese", "butter", "egg", "soda"];

function listItems() {
  let i = 0;
  while (i < fridge.length) {
    console.log(fridge[i]);
    i++;
  }
}

listItems(); // This should print out all five items of the array to the console.

/* ---------------------------------------------------------------------------
  Exercise Five
  
  Adding things to the fridge using a loop.

  You do not need to return anything, just modify the routine array.
*/
console.log("Exercise Five - addMultipleItems");

fridge = ["milk", "cheese", "butter"];

function addMultipleItems(item, numberToAdd) {
  // Your Code Here!
  let add = 0;
  while (add < numberToAdd) {
    fridge.push(item);
    add++;
  }
  // Use a while loop to add item to the array as many times as numberToAdd.
  //
  // For example, if item is "soda" and numberToAdd is 5, then this should push "soda" onto the array five times.
  // Hint: Use i < numberToAdd as your while loop condition.  Then each iteration of the loop
  // should push item onto the array once.
}

addMultipleItems("soda", 5);
console.log(fridge); // The Fridge should now have 5 "soda" items in it.

addMultipleItems("egg", 12);
console.log(fridge); // The fridge should now have a dozen "egg" items in it.

/* ------------------------------------------------
    OPTIONAL BONUS PROBLEM - Exercise Six

    A more complex fridge.

    You bought a new fridge, and this fridge allows you to store multiple copies of each item!
    Every type of item in your fridge is represented by an array.  So your fridge works like
    a two-dimensional array.
    
    The fridge comes with a helper function, getIndexOfItem()
    Use this function to know what index the array of any particular item is.
    
    For example, given the following fridge:
    
    let fridge = [
      ["juice"], 
      ["egg", "egg", "egg", "egg"], 
      ["butter"], 
      ["milk"]
    ];
    
    If you want to access an "egg", then you can do:
    
    let eggIndex = getIndexOfItem(fridge, "egg");
    
    This will set the index variable to 1
    Then to access the egg array, do:

    let eggArray = fridge[eggIndex];

    This will assign ["egg", "egg", "egg", "egg"] to the egg array.
    Then you can interact with it the same way you did from Exercise three.

    Write the code for the getItemFromNewFridge() and putItemIntoNewFridge() functions.
*/

/*
   -------START OF GIVEN CODE - DO NOT EDIT ------------------------------------
   But do read through through this code.  Try to understand what it's doing.
*/

/*
    getIndexOfItem
    given an item and a fridge, this returns the index of that item within the fridge
    If the fridge does not contain that item, it will return -1. 
 */
function getIndexOfItem(fridge, item) {
  let index = 0;
  while (index < fridge.length) {
    if (fridge[index].length > 0 && fridge[index][0] == item) {
      return index;
    }
    index++;
  }
  return -1;
}
/*
 -------END OF GIVEN CODE - DO NOT EDIT ------------------------------------
*/

/* 
 -------START OF YOUR CODE-----------------------------------------------------------

  example fridge:
  let fridge = [["egg", "egg", "egg", "egg"], ["butter"], ["milk"], ["cheese", "cheese"]];
*/

/*
  getItemFromNewFridge

  If an item exists in the fridge, remove it and return the item.
  If that was the last of that item, remove the empty array for that item.
  If the item isn't in the fridge, return null.
*/
function getItemFromNewFridge(fridge, item) {
  let itemNew = getIndexOfItem(fridge, item);
  if (itemNew === -1) {
    return null;
  }
  let items = fridge[itemNew];
  let returnedItem = items.pop();
  if (!items.length) {
    fridge.splice(itemNew, 1);
  }
  return returnedItem;
}

/*
  putItemInNewFridge

  If there are already similar items in the fridge, add this item to their array.
  Otherwise, create a new array in the fridge and put this item in it.
*/
function putItemInNewFridge(fridge, item) {
  let itemNew = getIndexOfItem(fridge, item);
  if (itemNew === -1) {
    let newItem = [item];
    fridge.push(newItem);
  } else {
    fridge[itemNew].push(item);
  }
}

// Your code here.

/*
 -------END OF YOUR CODE-----------------------------------------------------------
*/

/*
 -------TESTS---------------------------------------------------------------
 Run these commands to make sure you did it right. They should all be true.
*/

console.log("-----Tests for Bonus Exercise Six - getItemFromNewFridge-----");
let newFridge = [
  ["egg", "egg", "egg", "egg"],
  ["butter"],
  ["milk"],
  ["cheese", "cheese"],
];
console.log("* Get a cheese");
let lengthBeforeGettingCheese = newFridge.length;
let cheeseArrayLengthBeforeGettingCheese = newFridge[3].length;
let cheese = getItemFromNewFridge(newFridge, "cheese");
console.log(
  cheese == "cheese" &&
    newFridge.length == lengthBeforeGettingCheese &&
    newFridge[3].length == cheeseArrayLengthBeforeGettingCheese - 1
);

console.log("* Get the last milk");
let lengthBeforeGettingLastMilk = newFridge.length;
let milkArrayLengthBeforeGettingLastMilk = newFridge[2].length;
let lastMilk = getItemFromNewFridge(newFridge, "milk");
console.log(
  lastMilk == "milk" &&
    newFridge.length == lengthBeforeGettingLastMilk - 1 &&
    getIndexOfItem(newFridge, "milk") == -1
);

console.log("* Get a missing item");
let lengthBeforeGettingLeftovers = newFridge.length;
let leftovers = getItemFromNewFridge(newFridge, "leftovers");
console.log(
  leftovers == null &&
    newFridge.length == lengthBeforeGettingLeftovers &&
    getIndexOfItem(newFridge, "leftovers") == -1
);

console.log("-----Tests for Bonus Exercise Six - putItemInNewFridge-----");
console.log("* Add an egg");
let lengthBeforeAddingEgg = newFridge.length;
let eggArrayLengthBeforeAdding = newFridge[0].length;
putItemInNewFridge(newFridge, "egg");
console.log(
  newFridge.length == lengthBeforeAddingEgg &&
    newFridge[0].length == eggArrayLengthBeforeAdding + 1
);

console.log("* Add a new item");
let lengthBeforeAddingNewItem = newFridge.length;
putItemInNewFridge(newFridge, "yogurt");
console.log(
  newFridge.length == lengthBeforeAddingNewItem + 1 &&
    getIndexOfItem(newFridge, "yogurt") > -1 &&
    newFridge[getIndexOfItem(newFridge, "yogurt")].length == 1
);

console.log("* Get a missing item");
let lengthBeforeGettingMissingItem = newFridge.length;
let missingItem = getItemFromNewFridge(newFridge, "leftovers");
console.log(
  missingItem == null &&
    newFridge.length == lengthBeforeGettingMissingItem &&
    getIndexOfItem(newFridge, "leftovers") == -1
);
