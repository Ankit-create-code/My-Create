class BrowserHistory {
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.history = [homepage]; 
        this.curr = 0; 
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        this.history.length = this.curr + 1; 
        this.history.push(url); 
        this.curr++; 
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        this.curr = Math.max(0, this.curr - steps); 
        return this.history[this.curr]; 
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        this.curr = Math.min(this.history.length - 1, this.curr + steps); 
        return this.history[this.curr]; 
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
