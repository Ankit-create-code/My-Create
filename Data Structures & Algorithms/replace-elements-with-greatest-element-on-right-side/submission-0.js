class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let rightMax = -1;  
        let maxVal = -1; 

    for(let i = arr.length -1; i >= 0; i--){
        let current = arr[i]; 
        
        let originalValue = arr[i]; 
        arr[i] = maxVal; 
        maxVal = Math.max(maxVal, originalValue); 
    }   
        return arr;
    } 
 
}
