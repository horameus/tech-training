import { expect, test } from 'vitest';
import {
    capitalizeWords,
    countVowels,
    isIsogram,
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
