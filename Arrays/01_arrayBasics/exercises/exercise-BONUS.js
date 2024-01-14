/*
    Create a variable called "bakery" that points to an array
    Fill the array with the following String:
        - "Cake"
        - "Cookie"
        - "Bread"
        - "Scone"

    Print out bakery to make sure it has these 4 Strings in it.

    Create another variable called "myBakery" and assign it
    to "bakery" that we declared previously

    Add the following items to "myBakery":
        - "Croissant"
        - "Granola"

    Print out myBakery and bakery and observe the contents.

    WHY is this?
*/
const bakery=["Cake","Cookie"
,"Bread"
,"Scone"];
bakery.forEach(element => {
    console.log(element);
});
// const myBakery=[bakery,"croissant","granola"];
const myBakery=bakery;
console.log(myBakery);
myBakery.push("Croissant");
myBakery.push("Granola");
console.log("MY bakery")
myBakery.forEach(ele=>{
   
    console.log(ele)
})
