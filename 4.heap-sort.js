// Max Heapify function
function maxHeapify(array, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
  
    if (left < n && array[left] > array[largest]) {
      largest = left;
    }
  
    if (right < n && array[right] > array[largest]) {
      largest = right;
    }
  
    if (largest !== i) {
      [array[i], array[largest]] = [array[largest], array[i]];
      maxHeapify(array, n, largest);
    }
  }
  
  // Heap Sort function
  function heapSort(array) {
    const n = array.length;
  
    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      maxHeapify(array, n, i);
    }
  
    // Heap sort
    for (let i = n - 1; i > 0; i--) {
      [array[0], array[i]] = [array[i], array[0]];
      maxHeapify(array, i, 0);
    }
  
    return array;
  }
  
  // Example workouts:
  const arr1 = [6, 5, 3, 1, 8, 7, 2, 4];
  console.log("Original array:", arr1);
  console.log("Sorted array:", heapSort(arr1)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
  
  const arr2 = [9, 2, 5, 1, 10, 4, 7];
  console.log("Original array:", arr2);
  console.log("Sorted array:", heapSort(arr2)); // Output: [1, 2, 4, 5, 7, 9, 10]
  
  const arr3 = [3, 1, 7, 2, 8, 5];
  console.log("Original array:", arr3);
  console.log("Sorted array:", heapSort(arr3)); // Output: [1, 2, 3, 5, 7, 8]
  