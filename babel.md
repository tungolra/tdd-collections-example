## Babel as a development dependency 

- to use ES6's import/export statements. In that case, do the following:
    1. <code> npm install @babel/preset-env --save-dev</code>
    2. Create file: <code>touch .babelrc</code>
    3. Add to file: <code>{ "presets": ["@babel/preset-env"] }</code>
        - can now use import <code><var> from <file_path></code> instead of <code>require...</code>
        can now use export <code> export default additionCalculator</code>
     