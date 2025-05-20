import { expect, test } from 'vitest';
import { anagramEasy, anagramHard, anagramMedium } from './anagram.js';

const strArrayTrue = ['hEllo', 'OlLeh'];
const strArrayFalse = ['hEllo', 'BonJre'];

test('anagramEasy is true', () => {
    expect(anagramEasy(strArrayTrue)).toBe(true);
});

test('anagramEasy is false', () => {
    expect(anagramEasy(strArrayFalse)).toBe(false);
});

const strToFind = 'listen';
const strArray = [
    'silent', // anagram
    'enlist', // anagram
    'google', // not anagram
    'tinsel', // anagram
    'banana', // not anagram
    'inlets', // anagram
    'orange', // not anagram
    'stone', // not anagram
    'islet', // not anagram
    'netsil', // anagram
];

test('find all anagram, and keep them in the array', () => {
    expect(anagramMedium(strToFind, strArray)).toStrictEqual([
        'silent',
        'enlist',
        'tinsel',
        'inlets',
        'netsil',
    ]);
});

const strArrayHard = ['tones', 'listen', 'silent', 'race', 'acre', 'enlist', 'stone', 'onest', 'care'];

test('find all anagram, and keep them in the array, grouped', () => {
    expect(anagramHard(strArrayHard)).toStrictEqual([
        'tones',
        'stone',
        'onest',
        'listen',
        'silent',
        'enlist',
        'race',
        'acre',
        'care',
    ]);
});
