// ListNode class definition
export class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Helper function to create a linked list from an array
export function createLinkedList(arr) {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let currentNode = head;
  for (let i = 1; i < arr.length; i++) {
    currentNode.next = new ListNode(arr[i]);
    currentNode = currentNode.next;
  }
  return head;
}

// Helper function to create a cycle in the linked list
export function addCycle(head, pos) {
  if (pos === -1 || !head) return;
  let cycleNode = head;
  let tail = head;
  let index = 0;

  while (tail.next) {
    if (index === pos) {
      cycleNode = tail;
    }
    tail = tail.next;
    index++;
  }
  tail.next = cycleNode;
}
