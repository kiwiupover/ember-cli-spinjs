/* eslint-env node */
'use strict';

const Rollup = require('broccoli-rollup');
const transformer = require('ember-cli-es6-transform');
const mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-spinjs',

  included(app) {
    this._super.included.apply(app, arguments);

    app.import('vendor/spin.js');
  },

  treeForVendor(tree) {
    let allTrees = [];

    let rollupTree = new Rollup('./node_modules/spin.js', {
      rollup: {
        input: 'spin.js',
        output: {
          file: 'spin.js',
          format: 'es'
        },
        onwarn: function(warning) {
          // Suppress known error message caused by TypeScript compiled code with Rollup
          // https://github.com/rollup/rollup/wiki/Troubleshooting#this-is-undefined
          if (warning.code === 'THIS_IS_UNDEFINED') {
            return;
          }
          // eslint-disable-next-line no-console
          console.log("Rollup warning: ", warning.message);
        },
      }
    });

    const babel = this.parent.findAddonByName('ember-cli-babel');
    const babelOptions = babel.buildBabelOptions();
    const es6Tree = transformer.es6Transform(rollupTree, babelOptions);

    allTrees.push(es6Tree);

    if (tree) {
      allTrees.push(tree);
    }

    return mergeTrees(allTrees);
  }
};
