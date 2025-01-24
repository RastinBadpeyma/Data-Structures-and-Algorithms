const rotate = (nums: number[], k: number): number[] => {
    for (let i = 0;  i < k; i++) {
        const popNum :  number | undefined = nums.pop();
         if (popNum != undefined) {
            nums.unshift(popNum)
         }
    }
    return nums;
 
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 2));