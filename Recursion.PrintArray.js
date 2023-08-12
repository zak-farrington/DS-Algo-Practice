// Simple recursion - print all numbers from nested array.

const arrayToPrint = [1,2,3,[4,5,6], 7,[8,[9,10,11,12,13,14]],[15,16,17,18,19,[20,21,22,[23,24,25,[26,27,29]],31],32],33];

const printArrayNumbers = (array) => {
    for(let x = 0; x < array.length; x++)
    {
        if(typeof array[x] == "number") {
            console.log(array[x]);
        } else if (Array.isArray(array[x])) {
            printArrayNumbers(array[x]);
        }
    }
}

printArrayNumbers(arrayToPrint);