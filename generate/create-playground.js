let fs = require('fs-extra');
let path = require('path');
let rollup = require('rollup');
let rollupNodeResolver = require('rollup-plugin-node-resolve');
let rollupCommonJs = require('rollup-plugin-commonjs');

rollup.rollup({
  entry: require.resolve('../playground/playground.js'),
  plugins: [
    rollupNodeResolver({
      jsnext: true,
      main: true,
      browser: true
    }),
    rollupCommonJs({
      sourceMap: false
    })
  ]
})
  .then(bundle => {
    let result = bundle.generate({ format: 'cjs' })

    fs.writeFileSync(
      path.resolve(__dirname, '../playground/playground.bundle.js'),
      result.code
    );
  })
  .catch(err => {
    console.log(err);
  });
