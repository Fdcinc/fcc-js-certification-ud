function streamrollArray(arr) {
    const flat = [];

    function flatten(subArr) {
        for (const el of subArr) {
            if (Array.isArray(el)) {
                flatten(el);
            } else {
                flat.push(el);
            }
        }
    }

    flatten(arr);
    return flat;
}

module.exports = streamrollArray;