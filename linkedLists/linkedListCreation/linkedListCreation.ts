export class Node {
  value: number
  prev: Node
  next: Node

  constructor(value: number) {
    this.value = value
    this.prev = null
    this.next = null
  }
}

export class DoublyLinkedList {
  head: Node
  tail: Node

  constructor() {
    this.head = null
    this.tail = null
  }

  setHead(node: Node) {
    if (this.head === null) {
      this.head = node
      this.tail = node
      return
    }
    this.insertBefore(this.head, node)
  }

  setTail(node: Node) {
    if (this.tail === null) {
      this.setHead(node)
      return
    }
    this.insertAfter(this.tail, node)
  }

  insertBefore(node: Node, nodeToInsert: Node) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return
    this.remove(nodeToInsert)
    nodeToInsert.prev = node.prev
    nodeToInsert.next = node
    if (node.prev === null) {
      this.head = nodeToInsert
    } else {
      node.prev.next = nodeToInsert
    }
    node.prev = nodeToInsert
  }

  insertAfter(node: Node, nodeToInsert: Node) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return
    this.remove(nodeToInsert)
    nodeToInsert.prev = node
    nodeToInsert.next = node.next
    if (node.next === null) {
      this.tail = nodeToInsert
    } else {
      node.next.prev = nodeToInsert
    }
    node.next = nodeToInsert
  }

  insertAtPosition(position: number, nodeToInsert: Node) {
    if (position === 1) {
      this.setHead(nodeToInsert)
      return
    }
    let currentNode: Node | null = this.head
    let index: number = 1
    while (currentNode !== null && index++ !== position) currentNode = currentNode.next
    if (currentNode !== null) {
      this.insertBefore(currentNode, nodeToInsert)
    } else {
      this.setTail(nodeToInsert)
    }
  }

  removeNodesWithValue(value: number) {
    let currentNode: Node | null = this.head
    while (currentNode !== null) {
      const nodeToRemove = currentNode
      currentNode = currentNode.next
      if (nodeToRemove.value === value) {
        this.remove(nodeToRemove)
      }
    }
  }

  remove(node: Node) {
    if (node === this.head) {
      this.head = this.head.next
    }
    if (node === this.tail) {
      this.tail = this.tail.prev
    }
    if (node.prev !== null) {
      node.prev.next = node.next
    }
    if (node.next !== null) {
      node.next.prev = node.prev
    }
    node.prev = null
    node.next = null
  }

  containsNodeWithValue(value: number) {
    let currentNode: Node | null = this.head
    while (currentNode !== null && currentNode.value !== value) {
      currentNode = currentNode.next
    }
    return currentNode !== null
  }
}
