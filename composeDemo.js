import {compose} from 'redux'

function removeSpaces(string) {
    return string.split(" ").join("");
}
// console.log(removeSpaces("abc def ghi")); // Output: "abcdefghi"

function repeatString(string) {
    return string + string;
}
// console.log(repeatString("abcd")); // Output: "abcdabcd"

function convertToUpper(string) {
    return string.toUpperCase();
}
// console.log(convertToUpper("abcd")); // Output: "ABCD"
const input ="abc def ghi"
const composedFunction = compose (removeSpaces, repeatString, convertToUpper);
console.log(composedFunction(input))
