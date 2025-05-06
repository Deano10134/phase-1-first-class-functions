function receivesAFunction(callback) {
    return callback();
}
const returnsANamedFunction = () => {
    return function namedFunction() {
        console.log("I am a named function");
    }
}
const returnsAnAnonymousFunction = () => {
    return function() {
        console.log("I am an anonymous function");
    }
}
// Example usage:
const callback = () => {
    console.log("I am a callback function");
}   
receivesAFunction(callback); // Output: I am a callback function
const namedFunction = returnsANamedFunction();
namedFunction(); // Output: I am a named function
const anonymousFunction = returnsAnAnonymousFunction();
anonymousFunction(); // Output: I am an anonymous function
// The code defines three functions: receivesAFunction, returnsANamedFunction, and returnsAnAnonymousFunction.
// receivesAFunction takes a callback function as an argument and calls it.
// returnsANamedFunction returns a named function that logs a message when called.
// returnsAnAnonymousFunction returns an anonymous function that logs a message when called.
// The example usage demonstrates how to call each of these functions and see their outputs.
// The code is a demonstration of first-class functions in JavaScript, where functions can be passed as arguments, returned from other functions, and assigned to variables.