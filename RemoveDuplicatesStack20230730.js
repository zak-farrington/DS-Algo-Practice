/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stringStack = [];
    for(const char of s) {
        if(char === stringStack[stringStack.length - 1]) {
            const popped = stringStack.pop();
        }
        else {
            stringStack.push(char);
        }
    }
    return stringStack.join('');
};