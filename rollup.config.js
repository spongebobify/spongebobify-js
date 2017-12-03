import typescript from 'rollup-plugin-typescript2';
import uglify from 'rollup-plugin-uglify';

const sharedOptions = {
    input: 'src/main.ts',
    name: 'spongebobify'
};

export default [
    Object.assign(sharedOptions, {
        output: {
            file: 'dist/spongebobify.umd.js',
            format: 'umd'
        },
        plugins: [
            typescript(),
            uglify({
                mangle: {
                    keep_fnames: true
                }
            })
        ]
    }),
    Object.assign(sharedOptions, {
        output: {
            file: 'dist/spongebobify.esm.js',
            format: 'es'
        },
        plugins: [typescript()]
    })
];
