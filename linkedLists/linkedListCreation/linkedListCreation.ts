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

    if (this.containsNodeWithValue(node.value)) {
      node.prev.next = node.next
      node.next.prev = node.prev
    }

    this.head.prev = node
    node.prev = null
    node.next = this.head
    this.head = node
  }

  setTail(node: Node) {
    if (!this.tail) {
      this.tail = node
      return
    }

    const previousTail = this.tail
    previousTail.next = node
    this.tail = node
    this.tail.prev = previousTail
  }

  insertBefore(node: Node, nodeToInsert: Node) {
    if (this.containsNodeWithValue(nodeToInsert.value)) {
      nodeToInsert.prev = node.prev
      nodeToInsert.next = node
      node.prev.next = nodeToInsert
      node.prev = nodeToInsert
    }
  }

  insertAfter(node, nodeToInsert) {}

  insertAtPosition(position, nodeToInsert) {}

  removeNodesWithValue(value) {}

  remove(node) {}

  containsNodeWithValue(value: number) {
    let currentNode = this.head
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true
      }
      currentNode = currentNode.next
    }
    return false
  }
}
