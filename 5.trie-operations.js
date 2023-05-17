class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let currentNode = this.root;
  
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!currentNode.children[char]) {
          currentNode.children[char] = new TrieNode();
        }
        currentNode = currentNode.children[char];
      }
  
      currentNode.isEndOfWord = true;
    }
  
    search(word) {
      let currentNode = this.root;
  
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!currentNode.children[char]) {
          return false;
        }
        currentNode = currentNode.children[char];
      }
  
      return currentNode.isEndOfWord;
    }
  
    startsWith(prefix) {
      let currentNode = this.root;
  
      for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i];
        if (!currentNode.children[char]) {
          return false;
        }
        currentNode = currentNode.children[char];
      }
  
      return true;
    }
  }
  
  // Example workouts:
  const trie = new Trie();
  
  trie.insert("apple");
  console.log(trie.search("apple")); // Output: true
  console.log(trie.search("app")); // Output: false
  console.log(trie.startsWith("app")); // Output: true
  
  trie.insert("banana");
  console.log(trie.search("banana")); // Output: true
  console.log(trie.search("ban")); // Output: false
  console.log(trie.startsWith("ban")); // Output: true
  
  trie.insert("cat");
  console.log(trie.search("cat")); // Output: true
  console.log(trie.search("car")); // Output: false
  console.log(trie.startsWith("ca")); // Output: true
  