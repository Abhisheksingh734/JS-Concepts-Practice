/*
    1. Create the following array called "nums":
        [10, 20, 30, 40, 50]

    2. Create an new array called "timesTwo" that:
        - maps over "nums" and returns each number
          multiplied by two

    3. Create an new array called "over50" that:
        - filters "timesTwo" to keep only values over 50

    4. Print out all 3 arrays

    "over50" should contain: [60, 80, 100]
*/

const nums=[10, 20, 30, 40, 50];
const timesTwo=nums.map((ele,index)=>{
    return ele*2;
})
const over50=timesTwo.filter((ele,index)=>{
    return ele>50;
})
console.log(nums);
console.log(timesTwo);
console.log(over50);