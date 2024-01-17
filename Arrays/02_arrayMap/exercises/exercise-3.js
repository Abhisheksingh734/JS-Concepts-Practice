/*
    1. Create the following array called "items":
        ["light", "banana", "phone", "book", "mouse"]

    2. Create an new array called "plurals" that:
        - maps over "items" and adds an 's' to each one

    3. Print out both arrays

    4. Change it so if we see "mouse", we instead return "mice"
*/

const items=["light", "banana", "phone", "book", "mouse"];

const plurals=items.map((ele,index)=>{
    if(ele==="mouse"){
        return "mice";
    }
    
    return ele+"s";
})

console.log(plurals);