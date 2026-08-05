class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        points.sort((a, b) => {
             // Sort points based on their squared distance from the origin (x^2 + y^2)
            const distA = a[0] * a[0] + a[1] * a[1]; 
            const distB = b[0] * b[0] + b[1] * b[1]; 
            return distA - distB; 
        }); 
      // Return the first k closest points
        return points.slice(0, k); 
    }
}
