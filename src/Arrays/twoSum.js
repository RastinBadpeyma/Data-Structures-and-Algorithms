function twoSum(nums, target) {
   let numMap = new Map();
   
   for (let i = 0; i < nums.length; i++) {
       let complement = target - nums[i]; 
       if (numMap.has(complement)) {
           return [numMap.get(complement), i]; 
       }
       numMap.set(nums[i], i); 
      //  console.log(nums[i] , i);
   }
   
}


// console.log(twoSum([2, 7, 11, 15], 9)); 
console.log(twoSum([3, 2, 4], 6));      
// console.log(twoSum([3, 3], 6));  



