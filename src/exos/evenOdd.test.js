import { test, expect } from 'vitest';
import { evenOddEasy } from './evenOdd';

test('param number should return even', () => {
    expect(evenOddEasy(18)).toBe('even');
});

test('param number should return odd', () => {
    expect(evenOddEasy(37)).toBe('odd');
});
