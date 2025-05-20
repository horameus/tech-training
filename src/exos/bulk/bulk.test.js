import { expect, test } from 'vitest';
import { countVowels } from './bulk.js';

test('should return the number of vowels in a string', () => {
    console.log(countVowels('Hello world Its a me, Mario!'));
});
