export const sliceWords = (str: string, limit: number, delimiter: string = ', ', reverse: boolean = false): string => {
    if (str.length <= limit) return str;
    var result: string[] = [];
    var strs = str.split(delimiter);
    if (reverse) strs = strs.reverse();

    var len = 0;
    for (var s of strs) {
        len += s.length;
        if (len > limit) {
            break;
        }
        len += delimiter.length;
        if (reverse) result.unshift(s);
        else result.push(s);
    }

    return result.join(delimiter);
};

export const splitter = (str: string, limit: number, delimiter: string = ' '): string[] => {
    var strs = [];
    while (str.length > limit) {
        var pos = str.substring(0, limit).lastIndexOf(delimiter);
        pos = pos <= 0 ? limit : pos;
        strs.push(str.substring(0, pos));
        var i = str.indexOf(' ', pos) + 1;
        if (i < pos || i > pos + limit) i = pos;
        str = str.substring(i);
    }
    strs.push(str);
    return strs;
};
