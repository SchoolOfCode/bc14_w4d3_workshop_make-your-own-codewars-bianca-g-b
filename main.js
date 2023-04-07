/* 
👉 Write your kata here!

   Write a function that takes as argument an array of integers,
   and returns another array with the integers summed up, two by two.

   If the array is empty, return an empty array.
   If the array has only one integer, return the same array.
   If the array has an even number of integers (e.g. [1, 2, 3, 4]), return the sum of each pair of integers (e.g. [3, 7]).
   If the array has an odd number of integers (e.g. [1, 2, 3, 4, 5]), return the sum of each pair of integers, and last integer not summed up (e.g. [3, 7, 5]).

   Example  (Input => Output)
    [] => []
    [1] => [1]
    [1, 2, 3, 4] => [3, 7]
    [1, 2, 3, 4, 5] => [3, 7, 5]

*/ 

//👉 Write the function your CodeWarriors will start with below here:

export function modifyArrayOfNums(arrayOfNums) {
    // write your code here
    let newArr=[]
    // if(arrayOfNums.length%2==1) {arrayOfNums.push(0)} // alternative solution to line 28
    for  (let i=0; i<(arrayOfNums.length-1); i+=2) {
        newArr.push(arrayOfNums[i]+arrayOfNums[i+1]);
    }
    if (arrayOfNums.length%2===1) {
        newArr.push(arrayOfNums[arrayOfNums.length-1]);
    } 
   return newArr;
};

