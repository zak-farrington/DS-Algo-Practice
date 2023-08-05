var lengthOfLongestSubstring = function(s) {
    
    let charMap = new Map();
    let left = 0;
    let right = 0;
    let longestSubStringLength = 0;

    while (right < s.length) {
        const rightChar = s[right];
        let rightCharCount = charMap.get(rightChar) ?? 0;
        rightCharCount++;
        charMap.set(rightChar, rightCharCount);

        while(charMap.get(rightChar) > 1)  {
            let leftChar = s[left];
            let leftCharCount = charMap.get(leftChar);
            leftCharCount--;
            charMap.set(leftChar, leftCharCount);
            left++;
        }

        longestSubStringLength = Math.max(longestSubStringLength, right - left + 1);
        right++;
    }
    return longestSubStringLength;
};
