export function anagramEasy(str1, str2) {
    const strSplit1 = str1.toLowerCase().split('').sort().join('');
    const strSplit2 = str2.toLowerCase().split('').sort().join('');
    return strSplit1 === strSplit2;
}
