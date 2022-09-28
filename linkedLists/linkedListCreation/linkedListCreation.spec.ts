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

    expect(getNodeValuesHeadToTail(linkedList)).toBe([4, 1, 2, 3, 5])
  })
})
