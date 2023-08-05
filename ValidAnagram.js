// Solution 1
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    var sSplit = s.split("");
    var tSplit = t.split("");

    var sortedS = sSplit.sort((a,b) => a.charCodeAt() -b.charCodeAt());
    var sortedT = tSplit.sort((a, b) => a.charCodeAt() -b.charCodeAt());


    return JSON.stringify(sortedS) === JSON.stringify(sortedT);
};

// Solution 2
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length !== t.length) {
        return false;
    }
    
    var s = s.split("").sort();
    var t = t.split("").sort();

    for(var i = 0; i < s.length; i++)
    {
        if(s[i] !== t[i])
        {
            return false;''
        }
    }


    return true;
};


console.log(isAnagram("car", "car"));