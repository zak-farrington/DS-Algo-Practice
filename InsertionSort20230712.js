// Insertion Sort

const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
      const currentElement = array[i];
      let comparingIndex = i - 1;
  
      // Shift elements greater than the current element to the right
      while (comparingIndex >= 0 && array[comparingIndex] > currentElement) {
        array[comparingIndex + 1] = array[comparingIndex];
        comparingIndex--;
      }
  
      // Place the current element in its correct position
      array[comparingIndex + 1] = currentElement;
    }
  
    return array;
  }
  
  console.log(insertionSort([4, 3, 2, 7, 1]));
  