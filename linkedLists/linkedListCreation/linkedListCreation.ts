class Node {
  constructor(value) {
    this.value = value
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  setHead(node) {
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
