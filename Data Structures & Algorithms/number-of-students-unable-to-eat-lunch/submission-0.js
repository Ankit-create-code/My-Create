class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let counts = [0, 0]; 

        for(const preference of students){
            counts[preference]++; 
        } 
        for (const sandwich of sandwiches){
            if(counts[sandwich] > 0){
                counts[sandwich]--; 
             }else {
                return counts[0] + counts[1]; 
             }
        }
        return 0;
    }
}