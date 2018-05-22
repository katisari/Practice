// Biggie Size - Given an array, write a function that changes all positive numbers in the array to "big".  
// Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function changepositive(arr) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] > 0) {
            arr[i] = "big";
        }
    }
    return arr;
}

// Print Low, Return High - Create a function that takes array of numbers.  
// The function should print the lowest value in the array, and return the highest value in the array.
function printlow(arr) {
    var lowest = arr[0];
    var highest = arr[0];
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] < lowest) {
            lowest = arr[i];
        }
        if (arr[i] > highest) {
            highest = arr[i];
        }
    }
    console.log(lowest);
    return highest;
}

// Print One, Return Another - Build a function that takes array of numbers.  
// The function should print second-to-last value in the array, and return first odd value in the array.
function printreturn(arr) {
    console.log (arr[arr.length - 2]);
    var firstodd;
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] % 2 == 1) {
            firstodd = arr[i];
            break;
        }
    }
    return firstodd;
}

// Double Vision - Given array, create a function to return a new array where each value in the original has been doubled.  
// Calling double([1,2,3]) should return [2,4,6] without changing original.

function double(arr) {
    var newarray = [];
    for (var i = 0; i < arr.length; ++i) {
        newarray.push(2 * arr[i]);
    }
    return newarr;
}


// Count Positives - Given array of numbers, create function to replace last value with number of positive values.  
// Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
function countPositives(arr) {
    var counter = 0;
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] > 0) {
            ++counter;
        }
    }
    arr[arr.length-1] = counter;
    return arr;
}

// Evens and Odds - Create a function that accepts an array.  
// Every time that array has three odd values in a row, print "That's odd!".  
// Every time the array has three evens in a row, print "Even more so!"
function evenodd(arr) {
    var threeodd = 0;
    var threeeven = 0;
    for (var i = 0; i < arr.length; ++i) {
        if (threeodd == 3) {
            console.log("That's odd!");
        }
        if (threeeven == 3) {
            console.log("Even more so!");
        }

        if (arr[i] % 2 == 1) {                       // if odd
            if (threeeven > 0) {
                threeeven = 0;
            }
            ++threeodd;
        }
        if ((arr[i] % 2) == 0) {                  // if even
            if (threeodd > 0) {
                threeodd = 0;
            }
            ++threeeven;
        }
    }
}

// Increment the Seconds - Given an array of numbers arr, add 1 to every second element, 
// specifically those whose index is odd (arr[1], [3], [5], etc).  Afterward. console.log each array value and return arr.
function odd(arr) {
    for (var i = 0; i < arr.length; ++i) {
        if (i % 2) {                    // if odd
            arr[i] = 1 + arr[i];
        }
        console.log(arr[i]);
    }
    return arr;
}



// Previous Lengths - You are passed an array containing strings.  Working within that same array, 
// replace each string with a number - the length of the string at previous array index - and return the array.
function previouslength(arr) {
    var oldstringlength = arr[0].length;
    var newstringlength = arr[0].length;
    for (var i = 1; i < arr.length; ++i) {
        newstringlength = arr[i].length;
        arr[i] = oldstringlength;
        oldstringlength = newstringlength;
    }
    return arr;
}

// Add Seven to Most - Build function that accepts array. Return a new array with all values except first, 
// adding 7 to each. Do not alter the original array.
function addsevenmost(arr) {
    var newarr = [];
    for (var i = 0; i < arr.length; ++i) {
        newarr.push(7 + arr[i]);
    }
    return newarr;
}


// Reverse Array - Given an array, write a function that reverses values, in-place.  
// Example: reverse([3,1,6,4,2]) return same array, containing [2,4,6,1,3].  
// Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function reverse(arr) {
    for (var i = 0; i < arr.length / 2; ++i) {
        var temp = arr[i];
        arr[i] = arr[arr.length -1 -i];
        arr[arr.length -1 - i] = temp;
    }
    return arr;
}

// Outlook: Negative - Given an array, create and return a new one containing all the values of the provided array, 
// made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function negative(arr) {
    var newarr = [];
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] > 0) {
            newarr.push(-1 * arr[i]);
        }
        else {
            newwarr.push(arr[i]);
        }
    }
    return newarr;
}

// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values
//  is equal to "food".  If no array elements are "food", then print "I'm hungry" once.
function hungry(arr) {
    for (var i = 0; i < arr.length; ++i) {
        var foodcounter = 0;
        if (arr[i] == "food") {
            console.log("yummy");
            foodcounter = 1;
        }
        if (foodcounter == 0) {
            console.log("I'm hungry");
        }
    }
}

// Swap Toward the Center - Given array, swap first and last, third and third-to-last, etc.  
// Input[true,42,"Ada",2,"pizza"] becomes ["pizza", 42, "Ada", 2, true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].
function swapodd(arr) {
    for (var i = 0; i < arr.length/2; i = i + 2) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1- i];
        arr[arr.length-1-i] = temp;
    }
}

// Scale the Array - Given an array arr and a number num, multiply all values in arr by num, and return the 
// changed array arr.  For example, scaleArray([1,2,3],3) should return [3,6,9].

function scaleArray(arr, num) {
    for (var i = 0; i < arr.length; ++i) {
        arr[i] = num * arr[i];
    }
    return arr;
}
