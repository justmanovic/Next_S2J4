class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  insertInNode(value) {
    if (value >= this.value) {
      if (this.right === null) {
        this.right = new Node(value)
      } else {
        this.right.insertInNode(value)
      }
    } else {
      if (this.left === null) {
        this.left = new Node(value)
      } else {
        this.left.insertInNode(value)
      }
    }
  }

  find(num) {
    if (this.value === num)
      return this
    else if (num > this.value && this.right !== null) {
      return this.right.find(num)
    } else if (num < this.value && this.left !== null) {
      return this.left.find(num)
    } else return "la valeur n'existe pas dans l'arbre"
  }
}

class binarySearchTree {
  constructor(array = [4, 2, 9, 5, 1, 8, 9, 12]) {
    this.array = array
    this.root = new Node(this.array[0])
  }

  buildTree() {
    this.array.slice(1).forEach(value => {
      this.root.insertInNode(value)
    })
  }

  findInTree(value) {
    return this.root.find(value)
  }

}

let tree = new binarySearchTree()
tree.buildTree()
console.log(tree)
