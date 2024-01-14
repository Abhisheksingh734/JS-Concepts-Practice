/*
    1. Create an array called "prices" with the following values:
        [1.23, 19.99, 85.2, 32.87, 8, 5.2]

    2. Create a new array using filter called "lowPrices" that
       keeps all the prices where the price plus a 15% tax is
       less than 10.00

    3. Print out both arrays
*/
const prices=[1.23, 19.99, 85.2, 32.87, 8, 5.2];
const filterArr=prices.filter((ele,index)=>{
    return (ele+0.15*ele)<10.00;
})
console.log(prices);
console.log(filterArr);