class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
 searchMatrix = function(matrix, target) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) return false;
    
    const m = matrix.length;
    const n = matrix[0].length;
    
    // Step 1: Binary search to find the correct row
    let top = 0;
    let bottom = m - 1;
    let targetRow = -1;
    
    while (top <= bottom) {
        const midRow = (top + bottom) >> 1; // Faster bitwise division by 2
        
        if (matrix[midRow][0] <= target && target <= matrix[midRow][n - 1]) {
            targetRow = midRow;
            break; 
        } else if (matrix[midRow][0] > target) {
            bottom = midRow - 1;
        } else {
            top = midRow + 1;
        }
    }
    
    if (targetRow === -1) return false;
    
    // Step 2: Binary search within the identified row
    let left = 0;
    let right = n - 1;
    const row = matrix[targetRow];
    
    while (left <= right) {
        const mid = (left + right) >> 1;
        if (row[mid] === target) {
            return true;
        } else if (row[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return false;
};

}