// Given a string s of lower and upper case English letters.
//
// A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:
//
// - 0 <= i <= s.length - 2
// - s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
//
// To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.
//
// Return the string after making it good. The answer is guaranteed to be unique under the given constraints.
// Notice that an empty string is also good.
//
// Example inputs: "leEeetcode", or "abBAcC" 

/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    const stack = [];
    for(let x = 0; x < s.length; x++) {
        const char = s[x]


        if(stack[stack.length - 1]?.toLowerCase() === char.toLowerCase() && stack[stack.length - 1] !== char) {
            // last char and current character are similar but not the same case.
            stack.pop();
        }
        else {
            // push it
            stack.push(char);
        }
    }
    
    return stack.join("");
};