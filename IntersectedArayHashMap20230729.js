// Intersection Two Arrays (HashMap)


const getIntersections = (arrayA, arrayB) => {
    const mapA = {};
    
    const intersected = [];
    for (let index = 0; index < arrayA.length; index++) {
        mapA[arrayA[index]] = true;
    }

    for (let index = 0; index < arrayB.length; index++) {

        if(mapA[arrayB[index]]) {
            intersected.push(arrayB[index]);
        }
    }
  
  
    return intersected;
}

console.log(getIntersections([1,2,3,5], [2,3]));