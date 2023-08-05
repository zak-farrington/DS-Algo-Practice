const array = [12,11,7,2,5,8,14,1];

console.log("Unsorted Array", array);

for(let currentPosition = 1; currentPosition < array.length; currentPosition++) {
    const currentNumber = array[currentPosition];

    let comparePosition = currentPosition - 1;

    while(comparePosition >= 0 && array[comparePosition] > currentNumber) {
        array[comparePosition + 1] = array[comparePosition]; 
        comparePosition--;
    }

    array[comparePosition + 1] = currentNumber;

}

console.log("Sorted arary", array);

