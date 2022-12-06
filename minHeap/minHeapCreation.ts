class MinHeap {
  private heap: number[]
  constructor(array: number[]) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array: number[]) {
    return array
  }

  siftDown() {
    // compare child nodes = 2*i+1 and 2*i+2
  }

  siftUp(index: number) {
    // compare parent node = Math.floor((i-1)/2)
  }

  peek() {
    return this.heap[0]
  }

  remove() {
    
  }

  insert(value: number) {
    this.heap.push(value)
    this.siftUp(this.heap.length-1)
  }
}
