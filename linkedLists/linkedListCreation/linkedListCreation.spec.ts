import { DoublyLinkedList, Node } from './'

function bindNodes(nodeOne: Node, nodeTwo: Node) {
  nodeOne.next = nodeTwo
  nodeTwo.prev = nodeOne
}

function getNodeValuesHeadToTail(linkedList: DoublyLinkedList) {
  const values = []
  let node = linkedList.head
  while (node !== null) {
    values.push(node.value)
    node = node.next
  }
  return values
}

function getNodeValuesTailToHead(linkedList: DoublyLinkedList) {
  const values = []
  let node = linkedList.tail
  while (node !== null) {
    values.push(node.value)
    node = node.prev
  }
  return values
}

describe('LinkedListCreation', () => {
  it('works correctly', () => {
    const linkedList = new DoublyLinkedList()
    const one = new Node(1)
    const two = new Node(2)
    const three = new Node(3)
    const three2 = new Node(3)
    const three3 = new Node(3)
    const four = new Node(4)
    const five = new Node(5)
    const six = new Node(6)
    bindNodes(one, two)
    bindNodes(two, three)
    bindNodes(three, four)
    bindNodes(four, five)
    linkedList.head = one
    linkedList.tail = five

    linkedList.setHead(four)
    expect(getNodeValuesHeadToTail(linkedList)).toStrictEqual([4, 1, 2, 3, 5])
    expect(getNodeValuesTailToHead(linkedList)).toStrictEqual([5, 3, 2, 1, 4])
  })
})
