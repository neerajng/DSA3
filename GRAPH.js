class Graph{
    constructor(){
        this.adjList={}
    }

    addVertex(vertex){
        if(!this.adjList[vertex]) this.adjList[vertex]=[]
    }

    addEdges(v1,v2){
        this.adjList[v1].push(v2)
        this.adjList[v2].push(v1)
    }

    removeEdge(v1,v2){
        this.adjList[v1]=this.adjList[v1].filter(v=>v!=v2)
        this.adjList[v2]=this.adjList[v2].filter(v=>v!=v1)
    }

    removeVertex(vertex){
        while(this.adjList[vertex].length>0){
            let adjVertex=this.adjList[vertex].pop()
            this.removeEdge(vertex,adjVertex)
        }

        delete this.adjList[vertex]
    }

    pathexist(v1,v2){
        if(this.adjList[v1].find(v=>v===v2)&&this.adjList[v2].find(v=>v===v1)){
            return true
        }else{
            return false
        }
    }
}

let g=new Graph()
// g.addVertex("tokyo")
// g.addVertex("delhi")
// g.addEdges("tokyo","delhi")
g.addVertex(1)
g.addVertex(2)
g.addVertex(3)
g.addEdges(1,2)
g.addEdges(2,3)
g.addEdges(1,3)

// g.removeEdge(1,3)
g.pathexist(1,2)
g.removeVertex(3)

console.log(g)
