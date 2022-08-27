class LinkedList {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

function removeDuplicatesFromLinkedList(linkedList: any) {
  const map = {}
  let currentNode = linkedList
  let parentNode = null
  while (true) {
    if (currentNode.next) {
      if (!map[currentNode.value]) {
        map[currentNode.value] = currentNode.value
      } else {
        parentNode.next = currentNode.next.value
        currentNode.next = null
      }
      parentNode = currentNode
      currentNode = currentNode.next
    }
    break
  }

  return linkedList
}
