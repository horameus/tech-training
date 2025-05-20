export function counterEasy(str) {
    const strCount = str.split(' ');
    return strCount.length;
}

export function counterMedium(str) {
    const map = new Map();

    const words = str
        .toLowerCase()
        .replace(/[,.!?-]/g, '')
        .split(' ');
    for (const word of words) {
        if (map.has(word)) {
            map.set(word, map.get(word) + 1);
        } else {
            map.set(word, 1);
        }
    }

    return Object.fromEntries(map.entries());
}
