class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root=null
    }
    //inserting 
    insert(value){
        const newNode=new Node(value)
        if(this.root===null){
            this.root=newNode
            return this
        }
        let current = this.root

        while(current){
        if(value===current.value) return undefined    
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

    //searching
    find(value){
        let current= this.root
        if(current===null) return null

        while(current){
        if(value===current.value) return current
        if(value<=current.value){
            current = current.left
        }else{
            current=current.right
        }
        }

        return false
    }

    //contains
    contains(value){
        let current=this.root
        if(current===null) return undefined

        while(current){
        if(value===current.value) return true
        if(value<current.value){
            current=current.left
        }else{
            current=current.right
        }
        }
        return false
    }

    //minimum value
    min(){
        let current=this.root
        if(current===null) return undefined
        
        while(current){
            if(current.left===null) return current
            if(current.left!==null){
                current=current.left
            }
        }
    }

    max(){
        let current=this.root
        while(current){
            if(current.right===null) return current
            if(current.right!==null){
                current=current.right
            }
        }
    }

    min_right(current=this.root.right){        
        while(current.left!==null){
            current=current.left
        }
        return current
    }

    
    dfs(){
        let data = []
        function traverse(current){
            if(current.left) traverse(current.left)
            data.push(current.value)
            if(current.right) traverse(current.right)
        }
        traverse(this.root)
        return data        
    }

    delete(value){
        this.root=this.deleteNode(this.root,value)
    }
    deleteNode(current,value){
        if(current===null) return current
        if(value===current.value){
            if(current.left===null&&current.right===null){
                return null
            }
            if(current.left===null){
                return current.right
            }else if(current.right===null){
                return current.left
            }else{
                let tempNode=this.successor(current.right)
                current.value=tempNode.value

                current.right=this.deleteNode(current.right,tempNode.value)
                return current                                                                                                                                                                                  
            }
            
        }

        if(value<current.value){
            current.left=this.deleteNode(current.left,value)
            return current
        }else{
            current.right=this.deleteNode(current.right,value)
            return current
        }

    }

    successor(node){
        while(node.left!==null){
            node=node.left
        }
        return node
    }

    bfs(){
        let current=this.root
        let queue=[]
        let data = []
        queue.push(current)
        while(queue.length>0){
            let tempNode=queue.shift()
            data.push(tempNode.value)
            if(tempNode.left) queue.push(tempNode.left)
            if(tempNode.right) queue.push(tempNode.right)                   
        }
        return data        
    }

    dfs_preorder(){        
        let data=[]

        function traverse(node){
            data.push(node.value)
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }
        traverse(this.root)

        return data
    }
    dfs_inorder(){
        let data=[]
        function traverse(node){
            if(node.left) traverse(node.left)
            data.push(node.value)
            if(node.right) traverse(node.right)
        }
        traverse(this.root)
        return data
    }   

    dfs_postorder(){
        let data=[]
        function traverse(node){
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            data.push(node)
        }

        traverse(this.root)
        return data
    }

    closest(target){
        let current=this.root
        let closest= Infinity
        if(current===null) return null
        while(current){
            if(Math.abs(target-current.value)<Math.abs(target-closest)){
                closest=current.value
            }
            if(target<current.value){
                current=current.left
            }else{
                current=current.right
            }            
        }
        return closest
        
    }

    delete(value){
        this.root=this.deleteNode(this.root,value)
    }

    deleteNode(current,value){
        if(current===null) return current
        if(value===current.value){
            if(current.left===null &&current.right===null){
                return null
            }
            if(current.left===null){
                return current.right
            }else if(current.right===null){
                return current.left
            }else{
                let tempNode=this.successor(current.right,value)
                current.value=tempNode.value
                current.right=this.deleteNode(current.right,tempNode.value)
                return current
            }
        }
        if(value<current.value){
            current.left=this.deleteNode(current.left,value)
            return current
        }else{
            current.right=this.deleteNode(current.right,value)
            return current
        }
    }

    successor(node){
        while(node.left!==null){
            node=node.left
        }
        return node
    }

}

let tree = new BST()

tree.insert(30)
tree.insert(20)
tree.insert(50)
tree.insert(45)
tree.insert(15)
tree.insert(75)
tree.insert(25)