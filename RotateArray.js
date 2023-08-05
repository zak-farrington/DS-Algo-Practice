function rotate(arrayToRotate, numRotations) {
    let rotatedArray = [];
    const arrayLength = arrayToRotate.length;
    // eslint-disable-next-line no-plusplus
    for(let x = 0; x < numRotations; x++) {
        const indexToRotate = arrayLength - 1 - x; 
        rotatedArray.push(arrayToRotate[indexToRotate]);
    }
    
    return rotatedArray.concat(arrayToRotate.slice(0, arrayLength-numRotations));
}

var array = ['a','b','c','d','e','f'];
console.log(array);
console.log(rotate(array, 5));