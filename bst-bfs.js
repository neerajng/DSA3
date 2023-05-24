class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BST{
    constructor(){
        this.root=null
    }
    //insert
    insert(value){
        const newNode = new Node(value)
        if(this.root===null){
            this.root= newNode
            return this
        }
        let current=this.root
        while(true){
            if(value===current.value) return undefined
            if(value<current.value){
                if(current.left===null){
                    current.left= newNode
                    return this
                }
                current= current.left
            }else{
                if(current.right===null){
                    current.right=newNode
                    return this
                }
                current=current.right
            }
        }
    }
    //BFS(tree-traversal)
    bfs(){
        let node=this.root
        var data=[], queue=[]
        queue.push(node)
        while(queue.length){
            node=queue.shift()
            data.push(node.value)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)          
        }
        return data
    }

}

const tree = new BST()

tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
