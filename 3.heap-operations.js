class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    buildHeap(array) {
      this.heap = array;
      for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
        this.minHeapify(i);
      }
    }
  
    insert(value) {
      this.heap.push(value);
      let currentIndex = this.heap.length - 1;
      let parentIndex = Math.floor((currentIndex - 1) / 2);
  
      while (
        currentIndex > 0 &&
        this.heap[currentIndex] < this.heap[parentIndex]
      ) {
        [this.heap[currentIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[currentIndex],
        ];
        currentIndex = parentIndex;
        parentIndex = Math.floor((currentIndex - 1) / 2);
      }
    }
  
    remove() {
      if (this.heap.length === 0) {
        return null;
      }
  
      const minValue = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.minHeapify(0);
  
      return minValue;
    }
  
    minHeapify(index) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallestIndex = index;
  
      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = leftChildIndex;
      }
  
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = rightChildIndex;
      }
  
      if (smallestIndex !== index) {
        [this.heap[index], this.heap[smallestIndex]] = [
          this.heap[smallestIndex],
          this.heap[index],
        ];
        this.minHeapify(smallestIndex);
      }
    }
  }
  
  class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    buildHeap(array) {
      this.heap = array;
      for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
        this.maxHeapify(i);
      }
    }
  
    insert(value) {
      this.heap.push(value);
      let currentIndex = this.heap.length - 1;
      let parentIndex = Math.floor((currentIndex - 1) / 2);
  
      while (
        currentIndex > 0 &&
        this.heap[currentIndex] > this.heap[parentIndex]
      ) {
        [this.heap[currentIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[currentIndex],
        ];
        currentIndex = parentIndex;
        parentIndex = Math.floor((currentIndex - 1) / 2);
      }
    }
  
    remove() {
      if (this.heap.length === 0) {
        return null;
      }
  
      const maxValue = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.maxHeapify(0);
  
      return maxValue;
    }
  
    maxHeapify(index) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let largestIndex = index;
  
      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] > this.heap[largestIndex]
      ) {
        largestIndex = leftChildIndex;
      }
  
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] > this.heap[largestIndex]
      ) {
        largestIndex = rightChildIndex;
      }
      if (largestIndex !== index) {
        [this.heap[index], this.heap[largestIndex]] = [
          this.heap[largestIndex],
          this.heap[index],
        ];
        this.maxHeapify(largestIndex);
      }
    }
}

// Example usage:

// Min Heap
const minHeap = new MinHeap();
minHeap.buildHeap([9, 4, 7, 1, 2, 6, 5]);
console.log(minHeap.heap); // Output: [1, 2, 5, 9, 4, 6, 7]

minHeap.insert(3);
console.log(minHeap.heap); // Output: [1, 2, 3, 9, 4, 6, 7, 5]

minHeap.remove();
console.log(minHeap.heap); // Output: [2, 4, 3, 9, 5, 6, 7]

// Max Heap
const maxHeap = new MaxHeap();
maxHeap.buildHeap([1, 5, 2, 9, 7, 3, 6]);
console.log(maxHeap.heap); // Output: [9, 7, 6, 5, 1, 3, 2]

maxHeap.insert(8);
console.log(maxHeap.heap); // Output: [9, 8, 6, 7, 1, 3, 2, 5]

maxHeap.remove();
console.log(maxHeap.heap); // Output: [8, 7, 6, 5, 1, 3, 2]

      
        