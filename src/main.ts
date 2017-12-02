export default function spongebobify(text: string,startLower:boolean = true) {

    return startLower ? first(text):last(text);
    
}

const first = (text:string) => {
    return Array.from(text).reduce(
        (acc, el, i) => (acc += i % 2 ? el.toUpperCase() : el.toLowerCase()),
        ''
    );
}

const last = (text:string) => {
    return Array.from(text).reduce(
        (acc, el, i) => (acc += i % 2 ? el.toLowerCase() : el.toUpperCase()),
        ''
    );
}

