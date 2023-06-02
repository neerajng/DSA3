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
        const newNode = new Node(value)
        if(this.root===null){
            this.root=newNode
            return this
        }
        let current=this.root
        while(true){
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

    find(value){
        if(this.root===null) return undefined
        let current=this.root , found=false
        while(current&&!found){
            if(value<current.value){
                current=current.left
            }else if(value>current.value){
                current=current.right
            }else {
                found = true
            }
        }
        
        if(!found) return  false
        return current
    }

    contains(value){
        if(this.root ===null) return undefined
        let current=this.root, found=false
        while(current&&!found){
            if(value<current.value){
                current=current.left
            }else if(value>current.value){
                current=current.right
            }else{
                return true
            }
        }
        return false
    }

    delete(value){
        this.root=this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(root===null) return root;
        if(value<root.value){
            root.left=this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right=this.deleteNode(root.right,value)
        }else{
            if(root.left===null&&root.right===null){
                return null
            }else if(root.left===null){
                return root.right
            }else if(root.right===null){
                return root.left                
            }else{
                const successor=this.findMin(root.right)
                root.value=successor.value
                root.right=this.deleteNode(root.right,successor.value)
            }
        }
        return root
    }

    inorder(){
        let data=[]
        function traverse(node){
            if(node.left) traverse(node.left)
            data.push(node.value)
            if(node.right) traverse(node.right)
        }
        traverse(this.root)
        return data
    }

    bfs(){
        let data = [], queue = []
        let node=this.root
        queue.push(node.value)
        while(queue.length){
            node=queue.shift()
            data.push(node.value)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }

        return data
    }
}

let tree = new BST()
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)