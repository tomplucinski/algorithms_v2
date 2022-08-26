class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList: LinkedList[]) {
  if (linkedList.next) {
    const nextNode = removeDuplicatesFromLinkedList(linkedList.next);

    return nextNode;
  }
}
