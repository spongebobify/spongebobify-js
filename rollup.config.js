import typescript from 'rollup-plugin-typescript2';

export default {
    input: 'src/main.ts',
    name: 'spongebobify',
    output: {
        file: 'dist/spongebobify.js',
        format: 'umd'
    },
    plugins: [typescript()]
};
