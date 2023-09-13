const selectionSort = (inputArray) => {
    var copyArray = [...inputArray];
    for(let x = 0; x < copyArray.length; x++) {
        let lowestIndexThusFar = x;
        for(let y = x + 1; y < copyArray.length; y++) {
            if(copyArray[y] < copyArray[lowestIndexThusFar]) {
                lowestIndexThusFar = y;
            }
        }

        if(lowestIndexThusFar != x) {
            let toCopyLeft = copyArray[lowestIndexThusFar]; 
            copyArray[lowestIndexThusFar] = copyArray[x];
            copyArray[x] = toCopyLeft;
        }
    }

    return copyArray;
}


console.log(selectionSort([40,55,25,100,4,3,2,66,50]));