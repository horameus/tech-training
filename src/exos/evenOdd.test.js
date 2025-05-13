import { test, expect } from 'vitest';
import { evenOddEasy, evenOddMedium } from './evenOdd';

test('param number should return even', () => {
    expect(evenOddEasy(18)).toBe('even');
});

test('param number should return odd', () => {
    expect(evenOddEasy(37)).toBe('odd');
});

const numArray = [1, 17, 45, 12, 19, 10];

test('should return number of odd and even number', () => {
    expect(evenOddMedium(numArray)).toStrictEqual({
        even: 2,
        odd: 4,
    });
});
