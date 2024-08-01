import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';

export default {
  input: "build/index.js",
  output: {
    file: "./public/bundle.js",
    format: "iife", // sets up the output so it can be pulled in via script tag
  },
  plugins: [
    resolve(), // tells Rollup how to find imports
    commonjs(), // React is in commonjs so rollup needs this to be able to parse!
    babel({ // React code is in jsx so again rollup needs this to be able to parse  
        babelHelpers: 'bundled',
        presets: ['@babel/preset-react'],
        extensions: ['.js', '.jsx']
     }),
     replace({
        preventAssignment: false,
        'process.env.NODE_ENV': '"development"'
     })
]
};
