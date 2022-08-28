interface SingleNode {
  value: number | null
  next: SingleNode | null
}

export class SingleLinkedList {
  value: number
  next: SingleNode

  constructor(value: number) {
    this.value = value
    this.next = null
  }
}
