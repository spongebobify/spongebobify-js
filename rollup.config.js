import typescript from "rollup-plugin-typescript2";
import uglify from 'rollup-plugin-uglify';

export default {
  input: "src/main.ts",
  name: "spongebobify",
  output: {
    file: "dist/spongebobify.js",
    format: "umd"
  },
  plugins: [
    typescript(),
    uglify({
      mangle: {
        keep_fnames: true
      }
    })
  ]
};
