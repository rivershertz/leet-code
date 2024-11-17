import {expect, test} from 'vitest';
import {isPalindrome} from '.';
import {describe} from 'node:test';

describe('checks if a string is a valid palindrome', () => {
  test('string with white space', () => {
    expect(isPalindrome(' ')).toBeTruthy();
  });
  test('string with special characters', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBeTruthy();
  });
  test('invalid palindrome', () => {
    expect(isPalindrome('race a car')).toBeFalsy();
  });
});
