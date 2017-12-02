function spongebobify(text, startLower) {
    if (startLower === void 0) { startLower = true; }
    return text
        .split('')
        .reduce(function (acc, el, i) {
        return (acc +=
            !(i % 2) === startLower
                ? el.toLowerCase()
                : el.toUpperCase());
    }, '');
}

export default spongebobify;
