class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
       let part1 = nums; 
       let part2 = nums; 
       let combined = [...part1, ...part2];  

       let original = nums; 
       let doubled = original.concat(original);
       return doubled; 
    }   
     
}
