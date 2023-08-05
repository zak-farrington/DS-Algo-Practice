// First Duplicate Hashmap

const getFirstDuplicate = (array) => {
    const charsMap = new Map();
    for(const c of array) {
        if(charsMap.has(c)) {
            return c;
        }
        else  {
            charsMap.set(c, true);
        }
    }

    return null;
}


console.log(getFirstDuplicate(["a","b","a","c","d"]))