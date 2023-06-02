class MaxBinaryHeap{
    constructor(){
        this.values = []
    }

    insert(element){
        this.values.push(element)
        this.bubbleUP()
    }

    bubbleUP(){
        let idx=this.values.length-1
        let element=this.values[idx]
        while(idx>0){
            let parentIdx=Math.floor((idx-1)/2)
            let parent=this.values[parentIdx]
            if(element<=parent) break;
            this.values[parentIdx]=element
            this.values[idx]=parent
            idx=parent
        }
    }
}

let heap=new MaxBinaryHeap()

heap.insert(42)
heap.insert(33)
heap.insert(19)
heap.insert(3)
heap.insert(13)

console.log(heap)

