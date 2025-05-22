import { expect, test } from 'vitest';
import {
    capitalizeWords,
    countOccurrences,
    countVowels,
    isIsogram,
    removeDuplicates,
    removeDuplicatesAlt,
    reverseWords,
    reverseWordsAlt,
    sameDigitFrequency,
} from './bulk.js';

test('should return the number of vowels in a string', () => {
    console.log(countVowels('Hello world Its a me, Mario!'));
});

test('isogram', () => {
    console.log(isIsogram('Machine'));
});

test('reverse', () => {
    console.log(reverseWordsAlt('Machine des iles et de la destruction'));
});

test('sameFrequency', () => {
    console.log(sameDigitFrequency(1825, 8521));
});

test('Capitalize words', () => {
    console.log(capitalizeWords('machine des iles et de la destruction'));
});

test('remove duplicate', () => {
    console.log(removeDuplicatesAlt([1, 2, 5, 6, 9, 65, 9, 1, 1, 2, 9, 5, 5]));
});

test('Count occurence', () => {
    console.log(countOccurrences([1, 2, 5, 6, 9, 65, 9, 1, 1, 2, 9, 5, 5], 5));
});
