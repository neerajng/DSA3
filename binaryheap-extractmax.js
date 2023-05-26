class MaxBinaryHeap{
    constructor(){
        this.values=[41,39,33,18,27,12]//55
    }

    insert(element){
        this.values.push(element)
        this.bubbleUp()
    }

    bubbleUp(){
        let idx=this.values.length-1//last index
        let element=this.values[idx]//last added element
        while(idx>0){
            let parentIdx=Math.floor((idx-1)/2)//parent idx
            let parent=this.values[parentIdx]//parent
            if(element<=parent) break;//if element<= parent break
            this.values[parentIdx]=element//store elemt in parentidx
            this.values[idx]=parent//store prnt in last index
            idx=parentIdx//make latest idx is at parentidx
        }
    }

    extractMax(){
        let max = this.values[0]
        let end =this.values.pop()
        this.values[0]=end
        this.sinkDown()
        return max
    }

    sinkDown(){
        let idx=0
        const length = this.values.length
        const element = this.values[0]
         
        while(true){
            let leftChildIdx = 2*idx+1
            let rightChildIdx  =2*idx+2
            let leftChild, rightChild;
            let swap = null

            if(leftChildIdx<length){
                leftChild=this.values[leftChildIdx]
                if(leftChild>element){
                    swap=leftChildIdx
                }
            }

            if(rightChildIdx<length){
                rightChild=this.values[rightChildIdx]
            if(
            (swap===null && rightChildIdx<length )|| 
            (swap!==null && rightChild>leftChild)
            ){
                swap=rightChildIdx

            }  
            }         

            if(swap===null) break;

            this.values[idx]=this.values[swap]
            this.values[swap]=element 
            idx=swap

        }
        
    }
}
 let heap = new MaxBinaryHeap()  
heap.insert(55)