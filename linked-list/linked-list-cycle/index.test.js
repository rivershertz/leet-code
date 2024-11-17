import {expect, test, describe} from 'vitest';
import {hasCycle} from './index';
import {addCycle, createLinkedList} from '../../utils';

describe('checks if a linked list has a cycle', () => {
  test('linked list with a cycle', () => {
    const head = createLinkedList([3, 2, 0, -4]);
    addCycle(head, 1);
    expect(hasCycle(head)).toBeTruthy();
  });
  test('linked list without a cycle', () => {
    const head = createLinkedList([1]);
    addCycle(head, -1);
    expect(hasCycle(head)).toBeFalsy();
  });
});
