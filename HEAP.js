class Heap{
    constructor(){
        this.min_heap=[]
    }

    heapify_up(value){
        let arr=this.min_heap
        arr.push(value)

        let curr=arr.length-1

        while(curr>0){
            let parent=Math.floor((curr-1)/2)

            if(arr[curr]<=arr[parent]){
                [arr[curr],arr[parent]]=[arr[parent],arr[curr]]

                curr=parent
            }else{
                break
            }
        }
    }

    heapify_down(arr){
        
        // const n=arr.length
        [arr[0],arr[arr.length-1]]=[arr[arr.length-1],arr[0]]

        let removedKey= arr.pop()

        let curr=0

        while(2*curr+1<arr.length){
            let leftChildIndex= Math.floor(2*curr+1)
            let rightChildIndex=Math.floor(2*curr+2)
            let minChildIndex= (rightChildIndex<arr.length&&arr[rightChildIndex]<arr[leftChildIndex])? rightChildIndex : leftChildIndex

            if(arr[minChildIndex]<arr[curr]){
            [arr[minChildIndex],arr[curr]]=[arr[curr], arr[minChildIndex]]
            curr=minChildIndex
            }else{
                break;
            }
        }

        return removedKey; 
    }
    
}

const heap= new Heap()

heap.heapify_up(19)
heap.heapify_up(42)
heap.heapify_up(33)
heap.heapify_up(3)
heap.heapify_up(13)
let arry=heap.min_heap
console.log(arry)

//sorting
const len=arry.length
var sort=[]
for(let i=0;i<len;i++){
    sort.push(heap.heapify_down(arry))
}

console.log(sort)

