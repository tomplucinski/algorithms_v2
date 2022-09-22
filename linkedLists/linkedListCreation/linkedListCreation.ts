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
      this.remove(nodeToInsert)
    }
    nodeToInsert.prev = node.prev
    nodeToInsert.next = node
    node.prev.next = nodeToInsert
    node.prev = nodeToInsert
  }

  insertAfter(node: Node, nodeToInsert: Node) {
    if (this.containsNodeWithValue(nodeToInsert.value)) {
      this.remove(nodeToInsert)
    }
    if (node === this.tail) {
      this.tail = nodeToInsert
    }
    nodeToInsert.prev = node
    nodeToInsert.next = node.next
    node.next = nodeToInsert
  }

  insertAtPosition(position: number, nodeToInsert: Node) {
    let currentNode = this.head
    let index = 1
    while (currentNode) {
      if (position === index) {
        if (currentNode === this.head) {
          this.head = nodeToInsert
        }
        if ((currentNode = this.tail)) {
          this.tail = nodeToInsert
        }
        nodeToInsert.prev = currentNode.prev
        nodeToInsert.next = currentNode.next
      }
      currentNode = currentNode.next
      index += 1
    }
  }

  removeNodesWithValue(value) {}

  remove(node: Node) {
    let currentNode = this.head
    while (currentNode !== this.tail) {
      if (currentNode === node) {
        currentNode.next.prev = currentNode.prev
        currentNode.prev.next = currentNode.next
        return
      }
      currentNode = currentNode.next
    }
  }

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
