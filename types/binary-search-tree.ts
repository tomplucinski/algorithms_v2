interface Node {
  value: number | null;
  left: Node | null;
  right: Node | null;
}

export class BST {
  left: Node | null = null;
  right: Node | null = null;
  value: number | null = null;
  constructor(value: number) {
    this.value = value;
  }
}
