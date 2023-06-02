class Node{
    constructor(value){
        this.value=value
        this.isEndofWord=false
        this.children={}
    }
}

class Trie{
    constructor(){
        this.root=new Node(null)
    }
    search(word){
        let current=this.root

        for(let character of word){
            if(character.children[character]===undefined){
                return false
            }
            current=character.children[character]
            if(current.isEndofWord===true){
                return true
            } 
        }
        
        
    }
}

