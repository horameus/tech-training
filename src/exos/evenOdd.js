export function evenOddEasy(number) {
    if (number % 2 === 0) return 'even';
    else return 'odd';
}

export function evenOddMedium(numArray) {
    let even = 0,
        odd = 0;
    for (let i = 0; i < numArray.length; i++) {
        numArray[i] % 2 === 0 ? even++ : odd++;
    }
    return {
        even: even,
        odd: odd,
    };
}

export function evenOddMediumAlt(numArray) {
    return numArray.reduce(
        (acc, num) => {
            num % 2 === 0 ? acc.even++ : acc.odd++;
            return acc;
        },
        { even: 0, odd: 0 },
    );
}
