const { returns } = require("chai-spies");

function messageLog () {
    console.log("I am practicing callback functions");
}
function firstMessageOption () {
    console.log("Here is my first callback");
}
function secondMessageOption () {
    console.log("A second callback");
}
function receivesAFunction (callBack) {
    messageLog();
    callBack();
}
receivesAFunction (firstMessageOption);

function returnsANamedFunction() {
    return function Named() {
    console.log("Here is a Named Function");
    }
}
returnsANamedFunction();

function returnsAnAnonymousFunction() {
    return function() {
        console.log("Here is an anonymous function");
    }
}

