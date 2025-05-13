import { test, expect } from 'vitest';
import { evenOddEasy, evenOddHard, evenOddMedium } from './evenOdd';

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

const numbers = [
    12, 87, 43, 56, 3, 78, 29, 94, 11, 67, 38, 21, 72, 8, 90, 66, 59, 35, 17, 25, 7, 84, 60, 51, 98, 32, 40,
    19, 5, 73,
];

test('should return longest list of alternated odd/even num', () => {
    expect(evenOddHard(numbers)).toStrictEqual([43, 56, 3, 78, 29, 94, 11]);
});
