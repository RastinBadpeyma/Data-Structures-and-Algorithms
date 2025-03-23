const moveZeroes = (nums: number[]): number[] => {
    let finalArray: number[] = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            finalArray.push(0);
        } else {
            finalArray.unshift(nums[i]);
        }
    }

    return finalArray;
};



console.log(moveZeroes([0, 1, 0, 3, 12])); 