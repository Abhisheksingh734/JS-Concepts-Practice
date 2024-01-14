/*
    1. Create an array with the following strings:
        - "Mercury"
        - "Venus"
        - "Earth"
        - "Mars"

    2. Add the string "Jupiter" to the END of the array
    3. Add the string "Sun" to the START of the array
    4. Remove the last two strings from the array
    5. Remove the first two strings from the array

    *Print out the array after each of these steps ^
*/
const arr=["Mercury",
 "Venus"
, "Earth"
, "Mars"]
arr.push("Jupiter");
console.log(arr);
arr.unshift("Sun");console.log(arr);
// arr.pop();
// arr.pop();
arr.splice(-2);
console.log(arr);
arr.splice(0,2);
console.log(arr)
