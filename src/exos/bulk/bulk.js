// Task: Given a string, return the number of vowels in it.
export function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

export function countVowelsAlt(str) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'y']);
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (vowels.has(char)) count++;
    }

    return count;
}

// Task: Check if a word is an isogram (a word with no repeating letters). Ignore case.
export function isIsogram(str) {
    const word = str.toLowerCase().split('');

    for (let i = 0; i < word.length; i++) {
        const result = word.filter(letter => letter === word[i]);
        if (result.length > 1) return false;
    }

    return true;
}

export function isIsogramAlt(str) {
    const seen = new Set();

    for (const char of str.toLowerCase()) {
        if (seen.has(char)) {
            return false;
        }
        seen.add(char);
    }

    return true;
}

// Task: Given a sentence, return a new sentence with each word reversed, but word order preserved.
export function reverseWords(sentence) {
    const words = sentence.split(' ');
    const reformed = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i].split('').toReversed().join('');
        reformed.push(word);
    }

    return reformed.join(' ');
}

export function reverseWordsAlt(sentence) {
    return sentence
        .split(' ')
        .map(word => word.split('').toReversed().join(''))
        .join(' ');
}

// Task: Given two numbers, return true if they have the same frequency of digits.
export function sameDigitFrequency(num1, num2) {
    const arr1 = num1.toString().split('').sort().join('');
    const arr2 = num2.toString().split('').sort().join('');
    return arr1 === arr2;
}

// Task: Capitalize the first letter of each word in a sentence.
export function capitalizeWords(sentence) {
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
