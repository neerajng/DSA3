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

    insert(value){
        const newNode=new Node(value)
        if(this.root===null){
            this.root=newNode
            return this
        }
        let current = this. root
        while(true){
            if(value===current) return undefined
            if(value<current.value){
                if(current.left===null){
                    current.left=newNode
                    return this
                }
                current=current.left
            }else{
                if(current.right===null){
                    current.right=newNode
                    return this
                }
                current=current.right
            }
        }
    }

    dfsPostOrder(){
        let data=[]
        function traverse(node){
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)    
            data.push(node.value)        
        }   
        traverse(this.root)
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

tree.dfsPostOrder()