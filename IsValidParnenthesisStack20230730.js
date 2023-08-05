/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    if(s?.length === 1) {
        return false;
    }

    const openingBraces = ["(", "{", "["];
    const closingBraces = [")", "}", "]"];

    let retValue = false;
    const stack = [];

    for(let x = 0; x < s.length; x++) {
        const currentChar = s[x];
        const openingBraceIndex = openingBraces.indexOf(currentChar); 
        const closingBraceIndex = closingBraces.indexOf(currentChar);

        if(openingBraceIndex >= 0) {
            stack.push(currentChar);
        }
        else if(closingBraceIndex >= 0) {
            const popped = stack.pop();
            if(closingBraceIndex != openingBraces.indexOf(popped)) {
                return false;
            }
        }
    }

    if(stack.length !== 0) {
        return false;
    }
    
    // while(openingStack?.length > 0 || closingStack?.length > 0) {
    //     const openPopped = openingStack.pop();
    //     const closePopped = closingStack.pop();

    //     const openPopIndex = openingBraces.indexOf(openPopped); 
    //     const closePopIndex = closingBraces.indexOf(closePopped);
    //     console.log(`Char Open: ${openPopped} | Char Close: ${closePopped} | ${openPopIndex} vs ${closePopIndex}`);
    //     if(openPopIndex != closePopIndex) {
    //         return false;
    //     }
    // }

    return true;
};