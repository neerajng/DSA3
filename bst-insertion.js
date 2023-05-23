//node class
class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

//BST class

class BST {
    constructor() {
        this.root = null
    }
    //insert method
    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
            return this
        }
        var current = this.root
        while (true) {
            if (value === current.value)
                return undefined
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode
                    return this
                }
                current = current.left
            } else {
                if (current.right === null) {
                    current.right = newNode
                    return this
                }
                current = current.right
            }
        }
    }
}

const tree = new BST()

tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
