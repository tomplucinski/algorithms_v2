import { SingleLinkedList } from '../types'

// O(nlog(n)) time | O(log(n)) space
export function removeDuplicatesFromLinkedList(linkedList: SingleLinkedList) {
  const map: { [key: number]: number } = {}
  let currentNode = linkedList
  let parentNode = null
  do {
    if (!map[currentNode.value]) {
      map[currentNode.value] = currentNode.value
      parentNode = currentNode
      currentNode = currentNode.next
    } else {
      const nextNode = currentNode.next
      if (parentNode) {
        parentNode.next = currentNode.next
      }
      currentNode.next = null
      currentNode = nextNode
    }
  } while (currentNode)

  return linkedList
}
