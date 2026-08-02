class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = []; 

        for(let op of operations){
            if(op === '+'){
                const last = stack[stack.length - 1]; 
                const secondLast = stack[stack.length - 2]; 
                stack.push(last + secondLast);
            }else if (op === 'D'){
                const last = stack[stack.length - 1]; 
                stack.push(last * 2);
            }else if (op === 'C'){
                stack.pop();  
            }else {
                const score = Number(op); 
                stack.push(score);
            }
        } 
        const total = stack.reduce((sum, score) => sum + score, 0); 
        return total; 
    }  
}
