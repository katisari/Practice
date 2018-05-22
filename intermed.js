// Sigma - Implement function sigma(num) that given a number, 
// returns the sum of all positive integers up to number (inclusive).  
// Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
function sigma(num) {
    var sum = 0;
    for (var i = 1; i <= num; ++i) {
        sum += i;
    }
    return sum;
}

// Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication)
//  of all positive integers from 1 up to number (inclusive).  
// For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).
function factorial(num) {
    var product = 1;
    for (var i = 2; i <= num; ++i) {
        product *=  i;
    }
    return product;
}

// Fibonacci - Create a function to generate Fibonacci numbers.  
function fib(idx) {
    if (idx == 0) {
        return 0;
    }
    if (idx == 1) {
        return 1;
    }
    var prevprev = 0;
    var prev = 1;
    var currentval = 0;
    for (var i = 2; i <= idx; ++i) {
        currentval = prevprev + prev;
        prevprev = prev;
        prev = currentval;
    }
    return currentval;
}

// Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  
// If array is too short, return null.
function secondtolast(arr) {
    if (arr.length <= 1) {
        return null;
    }
    return arr[arr.length - 2];
}

// Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  
// If the array is too short, return null.
function nthtolast(arr, num) {
    if (arr.length < num) {
        return null;
    }
    return arr[arr.length - num];
}

// Array: Second-Largest: Return the second-largest element of an array. 
// Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.
function secondlargest(arr) {
    if (arr.length < 2) {
        return null;
    }
    var greatest = arr[0];
    var secondlargest = arr[1];
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] > greatest) {
            secondlargest = greatest;
            greatest = arr[i];
        }
        if (arr[i] < greatest && arr[i] > secondlargest) {
            secondlargest = arr[i];
        }
    }
    return secondlargest;
}

// Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  
// Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
function doubletrouble(arr) {
    var last_index = arr.length * 2 -1;
    var originallength = arr.length;
    for (var i = 0; i < originallength; ++i) {
        arr[last_index] = arr[originallength -1 -i];
        arr[last_index - 1] = arr[last_index];
        last_index -= 2;
    }
}






// Create a function Fib(n) where it returns the nth Fibonacci number. 
// Use recursion

function fib(n) {
    if (n == 0 || n == 1) {
        return n;
    }
    return fib(n-2) + fib(n-1);
}



