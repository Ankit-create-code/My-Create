class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let count0 = 0; 
        let count1 = 0; 
        let count2 = 0; 


        // step 1: count the ocurrences of each color 

        for (let num of nums){
            if (num === 0) count0++; 
            else if (num === 1) count1++; 
            else if(num === 2) count2++; 
        } 

        // step 2: overwrite the original array in - place 

        let idx = 0; 
        while (count0 > 0) {
            nums[idx++] = 0; 
            count0--; 
        } 
        while (count1 > 0){
            nums[idx++] = 1; 
            count1--; 
        } 
        while (count2 > 0) {
            nums[idx++] = 2; 
            count2--; 
        }
    }
}
