class TrieNode {
  end: number
  content: string
  children: TrieNode[]
  constructor (content: string = '') {
    this.content = content
    this.end = 0
    this.children = []
  }
}

class Trie {

  root: TrieNode

  constructor () {
    this.root = new TrieNode()
  }

  insert(word: string): void {
    let current = this.root
    for (let i = 0; i < word.length; i++) {
      let index = word.charCodeAt(i) - 'a'.charCodeAt(0)
      if (!current.children[index]) {
        current.children[index] = new TrieNode(word[i])
      }
      current = current.children[index]
    }
    current.end++
  }

  search(word: string): boolean {
    let current = this.root
    for (let i = 0; i < word.length; i++) {
      let index = word.charCodeAt(i) - 'a'.charCodeAt(0)
      if (!current.children[index]) {
        return false
      }
      current = current.children[index]
    }
    return current.end > 0
  }

  startsWith(prefix: string): boolean {
    let current = this.root
    for (let i = 0; i < prefix.length; i++) {
      let index = prefix.charCodeAt(i) - 'a'.charCodeAt(0)
      if (!current.children[index]) {
        return false
      }
      current = current.children[index]
    }
    return true
  }
}

/**
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/