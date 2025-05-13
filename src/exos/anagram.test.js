import { expect, test } from 'vitest';
import { anagramEasy } from './anagram.js';

test('anagramEasy is true', () => {
    expect(anagramEasy('hello', 'olleh')).toBe(true);
});

test('anagramEasy is false', () => {
    expect(anagramEasy('hello', 'kerjgkerjg')).toBe(false);
});

test('anagramEasy is true, with CAPITALS', () => {
    expect(anagramEasy('heLlO', 'olleH')).toBe(true);
});

test('anagramEasy is false, with CAPITALS', () => {
    expect(anagramEasy('heLlO', 'BaaaBBDJD')).toBe(false);
});
