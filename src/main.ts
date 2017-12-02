export default function spongebobify(text: string) {
    return Array.from(text).reduce(
        (acc, el, i) => (acc += i % 2 ? el.toUpperCase() : el.toLowerCase()),
        ''
    );
}
