function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let n = 0; n < array.length; n++) {
    const testValue = target - array[n];
    for (let m = n + 1; m < array.length; m++) {
        if (array[m] === testValue) {
            return true;
        };
    };
};
return false;
}

/* 
  Write the Big O time complexity of your function here
*/
// Runtime: O(n^2)
  // Space: O(n)
/* 
  Add your pseudocode here
*/
// iterate through the array, and if it finds a value that is equal to target 
  // check if a value exists in an array
  // iterating through the array, and checking if the two values match
  // If it is, then return true; otherwise return false

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
