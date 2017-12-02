export default function spongebobify(text: string, startLower: boolean = true) {
    return text
        .split('')
        .reduce(
            (acc, el, i) =>
                (acc +=
                    (i % 2) ^ +startLower
                        ? el.toLowerCase()
                        : el.toUpperCase()),
            ''
        );
}
