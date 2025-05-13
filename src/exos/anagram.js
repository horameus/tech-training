function normalizer(str) {
    return str.toLowerCase().split('').sort().join('');
}

export function anagramEasy(strArray) {
    strArray.forEach((str, index) => {
        strArray[index] = normalizer(str);
    });
    return strArray[0] === strArray[1];
}

export function anagramMedium(strToFind, strArray) {
    strToFind = normalizer(strToFind);
    return strArray.filter(str => {
        return normalizer(str) === strToFind;
    });
}
