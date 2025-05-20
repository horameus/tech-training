import { expect, test } from 'vitest';
import { countVowels, isIsogram, reverseWords, reverseWordsAlt } from './bulk.js';

test('should return the number of vowels in a string', () => {
    console.log(countVowels('Hello world Its a me, Mario!'));
});

test('isogram', () => {
    console.log(isIsogram('Machine'));
});

test('reverse', () => {
    console.log(reverseWordsAlt('Machine des iles et de la destruction'));
});
