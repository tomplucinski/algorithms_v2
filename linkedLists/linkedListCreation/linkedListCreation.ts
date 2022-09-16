class Node {
  value: number
  prev: Node
  next: Node

  constructor(value: number) {
    this.value = value
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList {
  head: Node
  tail: Node

  constructor() {
    this.head = null
    this.tail = null
  }

  setHead(node: Node) {
    if (!this.head && !this.tail) {
      this.head = node
      this.tail = node
      return
    }

    this.head.prev = node.value
    node.next = this.head
    this.head = node
  }

  setTail(node) {}

  insertBefore(node, nodeToInsert) {}

  insertAfter(node, nodeToInsert) {}

  insertAtPosition(position, nodeToInsert) {}

  removeNodesWithValue(value) {}

  remove(node) {}

  containsNodeWithValue(value) {}
}
