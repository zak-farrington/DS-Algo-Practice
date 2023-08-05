/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/\W|_/g, "").toLowerCase();
    var left = 0;
    var right = s.length - 1;
  
    while(left < right)
    {
        if(s[left] != s[right])
        {
            return false;
        }
        left++
        right--;
    }

    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
