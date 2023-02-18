function hashCode(str: string) {
    // java String#hashCode
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash * 100;
}

function intToRGB(i: number) {
    var c = (i & 0x00ffffff).toString(16).toUpperCase();

    return "#00000".substring(1, 6 - c.length) + c;
}

export const getColor = (s: string) => intToRGB(hashCode(s));
